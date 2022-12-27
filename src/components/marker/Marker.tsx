import React, { FC } from "react";

/**
 * Market component provides configurable interface to marker definition.
 * @example
 *
 * <Marker id="marker-id" fill="black" />
 */

interface Props {
  markerWidth: number;
  markerHeight: number;
  id: string;
  refX: number;
  fill: string;
}

const Marker: FC<Props> = ({ id, refX, markerHeight, markerWidth, fill }) => {
  return (
    <marker
      className="marker"
      id={id}
      viewBox="0 -5 10 10"
      refX={refX}
      refY="0"
      markerWidth={markerWidth}
      markerHeight={markerHeight}
      orient="auto"
      fill={fill}
    >
      <path d="M0,-5L10,0L0,5" />
    </marker>
  );
};

export default Marker;
