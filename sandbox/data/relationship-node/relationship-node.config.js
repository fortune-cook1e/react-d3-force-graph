import React from "react";
import RelationshipNode from "./RelationshipNode";

const relationConfig = {
  automaticRearrangeAfterDropNode: false,
  collapsible: false,
  height: 400,
  highlightDegree: 1,
  highlightOpacity: 0.1,
  linkHighlightBehavior: true,
  maxZoom: 12, // 最大和最小保持一致 缩放会导致箭头漂移
  minZoom: 0.1, //
  // initialZoom: 0.7,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  width: 1400,
  directed: true,
  d3: {
    alphaTarget: 0.5,
    gravity: -10000,
    linkLength: 400,
  },
  node: {
    renderLabel: false,
    size: {
      width: 1360,
      height: 1360,
    },
    viewGenerator: node => <RelationshipNode person={node} />,
  },
  link: {
    renderLabel: true,
    labelProperty: function(node) {
      return node.text;
    },
    color: "#5C8EFA",
    fontColor: "#5081FD",
    fontSize: 20,
    fontWeight: "normal",
    highlightColor: "rgba(92, 142, 250, 1)",
    highlightFontSize: 20,
    highlightFontWeight: "normal",
    mouseCursor: "pointer",
    opacity: 1,
    semanticStrokeWidth: true,
    strokeWidth: 2,
    type: "STRAIGHT",
  },
};

export default relationConfig;
