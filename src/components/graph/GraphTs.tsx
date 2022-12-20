import React, { FC, useState } from "react";

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
import useUpdateEffect from "../../hooks/useUpdateEffect";

interface Props {
  id: string;
}

const GraphTs: FC<Props> = ({ id }) => {
  const [focusAnimationTimeout, setFocusAnimationTimeout] = useState(null);
  const [];

  const onClickGraph = () => {};

  return (
    <div id={`${id}-${CONST.GRAPH_WRAPPER_ID}`}>
      <svg name={`svg-container-${id}`} style={svgStyle} onClick={onClickGraph}>
        {defs}
        <g id={`${id}-${CONST.GRAPH_CONTAINER_ID}`} {...containerProps}>
          {links}
          {nodes}
        </g>
      </svg>
    </div>
  );
};

export default GraphTs;
