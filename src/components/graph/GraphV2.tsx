import React, { FC, useEffect, useState } from "react";
import { GraphConfig, GraphState } from "src/types/graph";
import { drag as d3Drag } from "d3-drag";
import { forceLink as d3ForceLink } from "d3-force";
import { select as d3Select, selectAll as d3SelectAll, event as d3Event } from "d3-selection";
import { zoom as d3Zoom } from "d3-zoom";

import CONST from "./graph.const";
import DEFAULT_CONFIG from "./graph.config";
import ERRORS from "../../err";
import { getTargetLeafConnections, toggleLinksMatrixConnections, toggleLinksConnections } from "./collapse.helper";
import {
  updateNodeHighlightedValue,
  checkForGraphConfigChanges,
  checkForGraphElementsChanges,
  getCenterAndZoomTransformation,
  initializeGraphState,
  initializeNodes,
  isPositionInBounds,
} from "./graph.helper";
import { renderGraph } from "./graph.renderer";
import { merge, debounce, throwErr } from "../../utils";

interface Props {
  id: string;
  data: any;
  config: GraphConfig;
  onZoomChange?: (zoom: number) => void;
}

const GraphV2: FC<Props> = props => {
  const { config, data, id, onZoomChange } = props;
  // this.focusAnimationTimeout = null;
  // this.nodeClickTimer = null;
  // this.isDraggingNode = false;

  const [graphState, setGraphState] = useState<GraphState>(() => initializeGraphState(props, {}));

  const debounceZoomChange = () => {
    if (!onZoomChange) return;
    debounce(onZoomChange, 100);
  };

  const setZoomEvent = () => {
    const transform = d3Event.transform;
    d3SelectAll(`#${id}-${CONST.GRAPH_CONTAINER_ID}`).attr("transform", transform);

    // FixBug: stop transforming when panAndZoom is false
    if (config.panAndZoom) {
      setGraphState(g => ({
        ...g,
        transform,
      }));
    }

    // Tip: 暂时屏蔽zoom
    // only send zoom change events if the zoom has changed (_zoomed() also gets called when panning)
    // if (this.debouncedOnZoomChange && this.state.previousZoom !== transform.k && !this.state.config.panAndZoom) {
    //   this.debouncedOnZoomChange(this.state.previousZoom, transform.k);
    //   this.setState({ previousZoom: transform.k });
    // }
  };

  const setZoomConfig = () => {
    const selector = d3Select(`#${id}-${CONST.GRAPH_WRAPPER_ID}`);

    const zoomObject = d3Zoom().scaleExtent([config.minZoom, config.maxZoom]);

    if (!config.freezeAllDragEvents) {
      zoomObject.on("zoom", setZoomEvent);
    }

    // FixMe: 这里会出现 initialZoom 失效bug
    // 大概原因可能和 focusedNodeId 一致：图表未绘制出来 然后无法进行放大缩小
    // if (config.initialZoom !== null) {
    //   zoomObject.scaleTo(selector, config.initialZoom);
    // }

    // avoid double click on graph to trigger zoom
    // for more details consult: https://github.com/danielcaldas/react-d3-graph/pull/202
    selector.call(zoomObject).on("dblclick.zoom", null);
  };

  // 设置D3 Link 保证图表以 force-layout 展示
  function _graphLinkForceConfig() {
    const forceLink = d3ForceLink(graphState.d3Links)
      .id(l => l.id)
      .distance(graphState?.config?.d3?.linkLength)
      .strength(graphState?.config?.d3?.linkStrength);

    graphState?.simulation?.force(CONST.LINK_CLASS_NAME, forceLink);
  }

  // _graphNodeDragConfig() {
  //   const customNodeDrag = d3Drag()
  //     .on("start", this._onDragStart)
  //     .on("drag", this._onDragMove)
  //     .on("end", this._onDragEnd);

  //   d3Select(`#${this.state.id}-${CONST.GRAPH_WRAPPER_ID}`)
  //     .selectAll(".node")
  //     .call(customNodeDrag);
  // }

  function _graphBindD3ToReactComponent() {
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
      _graphLinkForceConfig();
    }
    // if (!graphState.config.freezeAllDragEvents) {
    //   _graphNodeDragConfig();
    // }
  }

  useEffect(() => {
    _graphBindD3ToReactComponent();
    setZoomConfig();
  }, []);

  const onClickNode = () => {};
  const onDoubleClickNode = () => {};
  const onRightClickNode = () => {};
  const onMouseOverNode = () => {};
  const onMouseOut = () => {};

  const onClickLink = () => {};
  const onRightClickLink = () => {};
  const onMouseOverLink = () => {};
  const onMouseOutLink = () => {};

  const { nodes, links, defs } = renderGraph(
    graphState.nodes,
    {
      onClickNode,
      onDoubleClickNode,
      onRightClickNode,
      onMouseOverNode,
      onMouseOut,
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

  return (
    <div id={`${id}-${CONST.GRAPH_WRAPPER_ID}`}>
      <svg name={`svg-container-${id}`} style={svgStyle}>
        {defs}
        <g id={`${id}-${CONST.GRAPH_CONTAINER_ID}`}>
          {links}
          {nodes}
        </g>
      </svg>
    </div>
  );
};

export default GraphV2;
