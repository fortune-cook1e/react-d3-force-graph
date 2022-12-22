import React from "react";

/**
 * Link component is responsible for encapsulating link render.
 * @example
 * const onClickLink = function(source, target) {
 *      window.alert(`Clicked link between ${source} and ${target}`);
 * };
 *
 * const onRightClickLink = function(source, target) {
 *      window.alert(`Right clicked link between ${source} and ${target}`);
 * };
 *
 * const onMouseOverLink = function(source, target) {
 *      window.alert(`Mouse over in link between ${source} and ${target}`);
 * };
 *
 * const onMouseOutLink = function(source, target) {
 *      window.alert(`Mouse out link between ${source} and ${target}`);
 * };
 *
 * <Link
 *     d="M1..."
 *     source="idSourceNode"
 *     target="idTargetNode"
 *     markerId="marker-small"
 *     strokeWidth=1.5
 *     stroke="green"
 *     strokeDasharray="5 1"
 *     strokeDashoffset="3"
 *     strokeLinecap="round"
 *     className="link"
 *     opacity=1
 *     mouseCursor="pointer"
 *     onClickLink={onClickLink}
 *     onRightClickLink={onRightClickLink}
 *     onMouseOverLink={onMouseOverLink}
 *     onMouseOutLink={onMouseOutLink} />
//  */

const Link = props => {
  const {
    onClickLink,
    onRightClickLink,
    onMouseOverLink,
    onMouseOutLink,
    source,
    target,
    strokeWidth,
    stroke,
    opacity,
    mouseCursor,
    strokeDasharray,
    strokeLinecap,
    className,
    markerId,
    d,
    label,
    id,
    fontColor,
    fontSize,
    fontWeight,
  } = props;

  const handleOnClickLink = () => {
    onClickLink?.(source, target);
  };

  const handleOnRightClickLink = () => {
    onRightClickLink?.(source, target);
  };

  const handleOnMouseOverLink = () => {
    onMouseOverLink?.(source, target);
  };

  const handleOnMouseOutLink = () => {
    onMouseOutLink?.(source, target);
  };

  const lineStyle = {
    strokeWidth: strokeWidth,
    stroke: stroke,
    opacity: opacity,
    fill: "none",
    cursor: mouseCursor,
    strokeDasharray: strokeDasharray,
    strokeDashoffset: strokeDasharray,
    strokeLinecap: strokeLinecap,
  };

  const lineProps = {
    className,
    d,
    onClick: handleOnClickLink,
    onContextMenu: handleOnRightClickLink,
    onMouseOut: handleOnMouseOutLink,
    onMouseOver: handleOnMouseOverLink,
    style: lineStyle,
  };

  if (markerId) {
    lineProps.markerEnd = `url(#${markerId})`;
  }

  const textProps = {
    dy: -1,
    style: {
      fill: fontColor,
      fontSize,
      fontWeight,
    },
  };

  // FixBug: 解决初始化时 计算 d时 会出现 NaN数据的Bug
  if (lineProps.d.includes("NaN")) return null;

  return (
    <g>
      <path {...lineProps} id={id} />
      {label && (
        <text style={{ textAnchor: "middle" }} {...textProps}>
          <textPath href={`#${id}`} startOffset="50%" style={{ opacity }}>
            {label}
          </textPath>
        </text>
      )}
    </g>
  );
};

export default Link;
