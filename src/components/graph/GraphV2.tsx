import React, { FC, useEffect, useState, useRef } from "react";
import { GraphConfig, GraphProps, GraphState } from "src/types/graph";
import { drag as d3Drag } from "d3-drag";
import { forceLink as d3ForceLink } from "d3-force";
import { select as d3Select, selectAll as d3SelectAll } from "d3-selection";
import { zoom as d3Zoom, ZoomBehavior } from "d3-zoom";
import * as d3 from "d3";

import CONST from "./graph.const";
import DEFAULT_CONFIG from "./graph.config";
import ERRORS from "../../err";
import { getTargetLeafConnections, toggleLinksMatrixConnections, toggleLinksConnections } from "./collapse.helper";
import {
  checkForGraphConfigChanges,
  checkForGraphElementsChanges,
  getCenterAndZoomTransformation,
  initializeNodes,
  isPositionInBounds,
} from "./graph.helper";
import { updateNodeHighlightedValue, initializeGraphState } from "./graph.helper-v2";
import { renderGraph } from "./graph.renderer";
import { merge, debounce, throwErr } from "../../utils";
import useUpdateEffect from "../../hooks/useUpdateEffect";

let nodeClickTimer: any = null;

const GraphV2: FC<GraphProps> = props => {
  const { config, data, id, onZoomChange, onNodePositionChange, onDoubleClickNode, onClickNode } = props;

  const [graphState, setGraphState] = useState<GraphState>(() => initializeGraphState(props, {}));
  const focusAnimationTimeout = useRef<any>(null);
  const isDraggingNode = useRef<boolean>(false);

  const WRAPPER_ID = `${id}-${CONST.GRAPH_WRAPPER_ID}`;
  const CONTAINER_ID = `${id}-${CONST.GRAPH_CONTAINER_ID}`;

  const debounceZoomChange = () => {
    if (!onZoomChange) return;
    debounce(onZoomChange, 100);
  };

  const setZoomConfig = () => {
    const wrapperSelector = d3Select(`#${WRAPPER_ID}`);
    const containerSelector = d3SelectAll(`#${CONTAINER_ID}`);

    const zoomObject: ZoomBehavior<any, any> = d3Zoom().scaleExtent([config.minZoom, config.maxZoom]);

    if (!config.freezeAllDragEvents) {
      zoomObject.on("zoom", ({ transform }) => {
        // FixBug: stop transforming when panAndZoom is false
        if (config.panAndZoom) {
          setGraphState(g => ({
            ...g,
            transform,
          }));
        }
        containerSelector.attr("transform", transform);
      });
    }

    wrapperSelector.call(zoomObject).on("dblclick.zoom", null);
  };

  // 设置D3 Link 保证图表以 force-layout 展示
  const _graphLinkForceConfig = () => {
    const forceLink = d3ForceLink(graphState.d3Links)
      .id(l => l.id)
      .distance(graphState?.config?.d3?.linkLength)
      .strength(graphState?.config?.d3?.linkStrength);

    graphState?.simulation?.force(CONST.LINK_CLASS_NAME, forceLink);
  };

  const pauseSimulation = () => graphState?.simulation?.stop();

  const _onDragStart = () => {
    isDraggingNode.current = true;
    pauseSimulation();
    if (graphState.enableFocusAnimation) {
      setGraphState(g => ({
        ...g,
        enableFocusAnimation: false,
      }));
    }
  };

  const _onDragMove = (ev, index, nodeList) => {
    console.log({ ev, index, nodeList });
    const id = nodeList[index].id;

    if (!graphState.config.staticGraph) {
      // this is where d3 and react bind
      const draggedNode = graphState.nodes[id];

      draggedNode.oldX = draggedNode.x;
      draggedNode.oldY = draggedNode.y;

      const newX = draggedNode.x + d3Event.dx;
      const newY = draggedNode.y + d3Event.dy;
      const shouldUpdateNode = !graphState.config.bounded || isPositionInBounds({ x: newX, y: newY }, graphState);

      if (shouldUpdateNode) {
        draggedNode.x = newX;
        draggedNode.y = newY;

        // set nodes fixing coords fx and fy
        draggedNode["fx"] = draggedNode.x;
        draggedNode["fy"] = draggedNode.y;
        setGraphState(g => ({
          ...g,
          draggedNode,
        }));
      }
    }
  };

  /**
   * Handles node position change.
   * @param {Object} node - an object holding information about the dragged node.
   * @returns {undefined}
   */
  const _onNodePositionChange = node => {
    if (!props.onNodePositionChange) {
      return;
    }

    const { id, x, y } = node;

    onNodePositionChange?.(id, x, y);
  };

  const _onDragEnd = () => {
    isDraggingNode.current = false;

    if (graphState.draggedNode) {
      _onNodePositionChange(graphState.draggedNode);
      setGraphState(g => ({
        ...g,
        draggedNode: undefined,
      }));
    }

    !graphState.config.staticGraph &&
      graphState.config.automaticRearrangeAfterDropNode &&
      graphState?.simulation?.alphaTarget(graphState?.config?.d3?.alphaTarget).restart();
  };

  // hover节点设置高亮节点
  const _setNodeHighlightedValue = (id: string, value = false) => {
    const { nodes, links, config } = graphState;
    const { nodes: updatedNodes, highlightedNode } = updateNodeHighlightedValue(nodes, links, config, id, value);

    setGraphState({
      ...graphState,
      nodes: updatedNodes,
      highlightedNode,
    });
  };

  // 生效D3拖拽效果
  const _graphNodeDragConfig = () => {
    const customNodeDrag = d3Drag()
      .on("start", _onDragStart)
      .on("drag", _onDragMove)
      .on("end", _onDragEnd);

    d3Select(`#${id}-${CONST.GRAPH_WRAPPER_ID}`)
      .selectAll(".node")
      .call(customNodeDrag);
  };

  // 初始化图表(核心)
  const _graphBindD3ToReactComponent = () => {
    if (!graphState) return;
    if (!graphState?.config?.d3?.disableLinkForce) {
      graphState?.simulation?.nodes(graphState.d3Nodes).on("tick", () => {
        // Propagate d3Nodes changes to nodes
        const newNodes: any = {};
        for (const node of graphState.d3Nodes) {
          newNodes[node.id] = node;
        }
        setGraphState(k => ({
          ...k,
          d3Nodes: graphState.d3Nodes,
          nodes: newNodes,
        }));
      });
      // Tip: 影响图表是否能画出force图
      _graphLinkForceConfig();
    }
    if (!graphState.config.freezeAllDragEvents) {
      _graphNodeDragConfig();
    }
  };

  // 居中 focusedNode
  const centerFocusedNode = () => {
    const focusedNodeId = data.focusedNodeId;

    const d3FocusedNode = graphState?.d3Nodes?.find(node => `${node.id}` === `${focusedNodeId}`);
    const containerElId = `${graphState.id}-${CONST.GRAPH_WRAPPER_ID}`;
    const focusTransformation =
      getCenterAndZoomTransformation(d3FocusedNode, graphState.config, containerElId) || graphState.focusTransformation;
    setGraphState(g => ({
      ...g,
      focusedNodeId,
      focusTransformation,
    }));
  };

  useEffect(() => {
    _graphBindD3ToReactComponent();
    setZoomConfig();
  }, []);

  useEffect(() => {
    // Tip: 只有当 end 事件触发时才说明节点各个位置已绘制完毕
    graphState?.simulation?.on("end", value => {
      console.log("end....");
      // centerFocusedNode();
    });
  }, []);

  const _generateFocusAnimationProps = () => {
    // In case an older animation was still not complete, clear previous timeout to ensure the new one is not cancelled
    if (graphState.enableFocusAnimation) {
      if (focusAnimationTimeout.current) {
        clearTimeout(focusAnimationTimeout.current);
      }

      focusAnimationTimeout.current = setTimeout(
        () => setGraphState(g => ({ ...g, enableFocusAnimation: false })),
        graphState?.config?.focusAnimationDuration * CONST.FOCUS_ANIMATION_DURATION
      );
    }

    const transitionDuration = graphState.enableFocusAnimation ? graphState.config.focusAnimationDuration : 0;

    return {
      style: { transitionDuration: `${transitionDuration}s` },
      transform: graphState.focusTransformation,
    };
  };

  const _onClickNode = (clickedNodeId: string) => {
    const clickedNode = graphState.nodes[clickedNodeId];
    if (!nodeClickTimer) {
      // Note: onDoubleClickNode is not defined we don't need a long wait
      // to understand weather a second click will arrive soon or not
      // we can immediately trigger the click timer because we're 100%
      // that the double click even is never intended
      const ttl = onDoubleClickNode ? CONST.TTL_DOUBLE_CLICK_IN_MS : 0;
      nodeClickTimer = setTimeout(() => {
        if (graphState.config.collapsible) {
          const leafConnections = getTargetLeafConnections(clickedNodeId, graphState.links, graphState.config);
          const links = toggleLinksMatrixConnections(graphState.links, leafConnections, graphState.config);
          const d3Links = toggleLinksConnections(graphState.d3Links, links);
          const firstLeaf = leafConnections?.["0"];

          let isExpanding = false;

          if (firstLeaf) {
            const visibility = links[firstLeaf.source][firstLeaf.target];

            isExpanding = visibility === 1;
          }

          setGraphState(g => ({
            ...g,
            links,
            d3Links,
          }));

          if (isExpanding) {
            _graphNodeDragConfig();
          }
        }
        onClickNode?.(clickedNodeId, clickedNode);
        nodeClickTimer = null;
      }, ttl);
    } else {
      onDoubleClickNode?.(clickedNodeId, clickedNode);
      nodeClickTimer = clearTimeout(nodeClickTimer);
    }
  };
  const _onDoubleClickNode = () => {};
  const onRightClickNode = () => {};

  const onMouseOverNode = (id: string) => {
    if (isDraggingNode.current) return;
    const clickedNode = graphState.nodes[id];

    // Todo: 接收 onMouseOverNode
    graphState.config.nodeHighlightBehavior && _setNodeHighlightedValue(id, true);
  };

  const onMouseOutNode = (id: string) => {
    if (isDraggingNode.current) return;
    const clickedNode = graphState.nodes[id];

    // Todo: 接收onMouseOutNode Props
    graphState.config.nodeHighlightBehavior && _setNodeHighlightedValue(id, false);
  };

  const onClickLink = () => {};
  const onRightClickLink = () => {};
  const onMouseOverLink = () => {};
  const onMouseOutLink = () => {};

  const { nodes, links, defs } = renderGraph(
    graphState.nodes,
    {
      onClickNode: _onClickNode,
      onDoubleClickNode: _onDoubleClickNode,
      onRightClickNode,
      onMouseOverNode,
      onMouseOut: onMouseOutNode,
    },
    graphState.d3Links,
    graphState.links,
    {
      onClickLink,
      onRightClickLink,
      onMouseOverLink,
      onMouseOutLink,
    },
    graphState.config,
    graphState.highlightedNode,
    null,
    graphState.transform.k
  );

  const svgStyle = {
    height: config.height,
    width: config.width,
  };

  const containerProps = _generateFocusAnimationProps();

  return (
    <div id={WRAPPER_ID}>
      <svg name={`svg-container-${id}`} style={svgStyle}>
        {defs}
        <g id={CONTAINER_ID} {...containerProps}>
          {links}
          {nodes}
        </g>
      </svg>
    </div>
  );
};

export default GraphV2;
