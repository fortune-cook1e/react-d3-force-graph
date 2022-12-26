export type GraphStateLink = Record<string, Record<string, number>>;

export interface GraphLinkConfig {
  onClickLink?: (source: string, target: string) => void;
  onRightClickLink?: (source: string, target: string) => void;
  onMouseOverLink?: (source: string, target: string) => void;
  onMouseOutLink?: (source: string, target: string) => void;
  source: string;
  target: string;
  strokeWidth?: number;
  stroke?: string;
  opacity?: number;
  mouseCursor?: string;
  strokeDasharray?: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  className?: string;
  markerId?: string;
  d: string;
  label?: string;
  id: string;
  fontColor?: string;
  fontSize?: number;
  fontWeight?: number;
}
