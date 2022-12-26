export interface GraphStateNode {
  highlighted?: boolean;
  id: string;
  index: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
  fx: number;
  fy: number;
  [prop: string]: any;
}
