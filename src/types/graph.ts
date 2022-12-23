import { ReactNode } from "react";
import { GraphStateNode } from "./node";
import { GraphStateLink } from "./link";
export interface GraphD3Config {
  alphaTarget: number;
  gravity: number;
  linkLength: number;
  linkStrength: number;
  disableLinkForce: boolean;
}

export interface GraphNodeConfig {
  color?: string;
  fontColor?: string;
  fontSize?: number;
  fontWeight?: "normal" | number;
  highlightColor: "SAME";
  highlightFontSize?: number;
  highlightFontWeight?: "normal" | number;
  highlightStrokeColor?: string;
  highlightStrokeWidth?: number;
  labelProperty?: string;
  labelPosition?: "left" | "right" | "top" | "bottom" | "center";
  labelClass?: string;
  mouseCursor?: "pointer";
  opacity?: number;
  renderLabel?: boolean;
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  svg?: any;
  symbolType?: "circle" | "cross" | "diamond" | "square" | "star" | "triangle" | "wye";
  viewGenerator?: ReactNode;
}

export interface GraphLinkConfig {
  color?: string;
  fontColor?: string;
  fontSize?: 8;
  fontWeight?: number;
  highlightColor?: string;
  highlightFontSize?: number;
  highlightFontWeight?: "normal" | number;
  labelProperty?: string;
  mouseCursor?: "pointer";
  opacity?: number;
  renderLabel?: boolean;
  semanticStrokeWidth?: number;
  strokeWidth?: number;
  markerHeight?: number;
  markerWidth?: number;
  type?: "STRAIGHT" | "CURVE_SMOOTH" | "CURVE_FULL";
  selfLinkDirection?: "TOP_RIGHT";
  strokeDasharray?: number;
  strokeDashoffset?: number;
  strokeLinecap?: "butt" | "round" | "square";
}
export interface GraphConfig {
  automaticRearrangeAfterDropNode?: boolean;
  collapsible?: boolean;
  directed?: boolean;
  focusAnimationDuration?: number;
  focusZoom?: number;
  freezeAllDragEvents?: boolean;
  width: number;
  height: number;
  highlightDegree?: number;
  highlightOpacity?: number;
  linkHighlightBehavior?: boolean;
  maxZoom?: number;
  minZoom?: number;
  initialZoom?: number;
  nodeHighlightBehavior?: boolean;
  panAndZoom?: boolean;
  staticGraph?: boolean;
  staticGraphWithDragAndDrop?: boolean;
  bounded?: boolean;
  d3?: GraphD3Config;
  node?: GraphNodeConfig;
  link?: GraphLinkConfig;
}

// export interface GraphData {}

export interface GraphState {
  id: string;
  config: GraphConfig;
  links: GraphStateLink;
  d3Links?: [];
  nodes: Record<string, GraphStateNode>;
  d3Nodes?: [];
  highlightedNode?: string;
  simulation?: [];
  newGraphElements: boolean;
  configUpdated: boolean;
  transform: {
    x: number;
    y: number;
    k: number;
  };
  draggedNode?: [];
  enableFocusAnimation?: boolean;
  focusTransformation?: string;
  focusAnimationDuration?: number;
}
