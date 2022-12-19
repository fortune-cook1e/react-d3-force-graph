import React from "react";

import nodeHelper from "./node.helper";
import CONST from "./node.const";
import { logWarning } from "../../utils";

/**
 * Node component is responsible for encapsulating node render.
 * @example
 * const onClickNode = function(nodeId) {
 *     window.alert('Clicked node', nodeId);
 * };
 *
 * const onRightClickNode = function(nodeId) {
 *     window.alert('Right clicked node', nodeId);
 * }
 *
 * const onMouseOverNode = function(nodeId) {
 *     window.alert('Mouse over node', nodeId);
 * };
 *
 * const onMouseOutNode = function(nodeId) {
 *     window.alert('Mouse out node', nodeId);
 * };
 *
 * const generateCustomNode(node) {
 *     return <CustomComponent node={node} />;
 * }
 *
 * <Node
 *     id='nodeId'
 *     cx=22
 *     cy=22
 *     fill='green'
 *     fontSize=10
 *     fontColor='black'
 *     fontWeight='normal'
 *     dx=90
 *     label='label text'
 *     labelPosition='top'
 *     opacity=1
 *     renderLabel=true
 *     size=200
 *     stroke='none'
 *     strokeWidth=1.5
 *     svg='assets/my-svg.svg'
 *     type='square'
 *     viewGenerator={generateCustomNode}
 *     className='node'
 *     onClickNode={onClickNode}
 *     onRightClickNode={onRightClickNode}
 *     onMouseOverNode={onMouseOverNode}
 *     onMouseOutNode={onMouseOutNode} />
 */

const Node = props => {
  const {
    id,
    onClickNode,
    onRightClickNode,
    onMouseOverNode,
    onMouseOut,
    cursor,
    opacity,
    renderLabel,
    labelPosition,
    dx,
    cx,
    cy,
    fontColor,
    fontSize,
    fontWeight,
    labelClass,
    size,
    svg,
    viewGenerator,
    label: propsLabel,
    overrideGlobalViewGenerator,
    fill,
    type,
    stroke,
    strokeWidth,
    className,
  } = props;
  /**
   * Handle click on the node.
   * @returns {undefined}
   */
  const handleOnClickNode = () => onClickNode?.(id);

  /**
   * Handle right click on the node.
   * @param {Object} event - native event.
   * @returns {undefined}
   */
  const handleOnRightClickNode = event => onRightClickNode?.(event, id);

  /**
   * Handle mouse over node event.
   * @returns {undefined}
   */
  const handleOnMouseOverNode = () => onMouseOverNode?.(id);

  /**
   * Handle mouse out node event.
   * @returns {undefined}
   */
  const handleOnMouseOutNode = () => onMouseOut?.(id);

  const nodeProps = {
    cursor: cursor,
    onClick: handleOnClickNode,
    onContextMenu: handleOnRightClickNode,
    onMouseOut: handleOnMouseOutNode,
    onMouseOver: handleOnMouseOverNode,
    opacity: opacity,
  };

  const textProps = {
    ...nodeHelper.getLabelPlacementProps(dx, labelPosition),
    fill: fontColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    opacity: opacity,
    ...(labelClass && { className: labelClass }),
  };

  const isSizeNumericalValue = typeof size !== "object";

  let gtx = cx,
    gty = cy,
    label = null,
    node = null;

  if (svg || viewGenerator) {
    const height = isSizeNumericalValue ? size / 10 : size.height / 10;
    const width = isSizeNumericalValue ? size / 10 : size.width / 10;
    const tx = width / 2;
    const ty = height / 2;
    const transform = `translate(${tx},${ty})`;
    label = (
      <text {...textProps} transform={transform}>
        {propsLabel}
      </text>
    );

    // By default, if a view generator is set, it takes precedence over any svg image url
    if (viewGenerator && !overrideGlobalViewGenerator) {
      node = (
        <svg {...nodeProps} width={width} height={height}>
          <foreignObject x="0" y="0" width="100%" height="100%">
            <section style={{ height, width, backgroundColor: "transparent" }}>{viewGenerator(props)}</section>
          </foreignObject>
        </svg>
      );
    } else {
      node = <image {...nodeProps} href={svg} width={width} height={height} />;
    }

    // svg offset transform regarding svg width/height
    gtx -= tx;
    gty -= ty;
  } else {
    if (!isSizeNumericalValue) {
      logWarning("node.size should be a number when not using custom nodes.");
      size = CONST.DEFAULT_NODE_SIZE;
    }
    nodeProps.d = nodeHelper.buildSvgSymbol(size, type);
    nodeProps.fill = fill;
    nodeProps.stroke = stroke;
    nodeProps.strokeWidth = strokeWidth;

    label = <text {...textProps}>{propsLabel}</text>;
    node = <path {...nodeProps} />;
  }

  const gProps = {
    className,
    cx,
    cy,
    id,
    transform: `translate(${gtx},${gty})`,
  };

  return (
    <g {...gProps}>
      {node}
      {renderLabel && label}
    </g>
  );
};

export default Node;
