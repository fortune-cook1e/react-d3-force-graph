import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const ReactD3Demo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function drag() {
    function dragstarted(event, d) {
      console.log("this", { event, d });
      d3.select(this)
        .raise()
        .attr("stroke", "black");
    }

    function dragged(event, d) {
      d3.select(this)
        .attr("cx", (d.x = event.x))
        .attr("cy", (d.y = event.y));
    }

    function dragended(event, d) {
      d3.select(this).attr("stroke", null);
    }

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  const createSvg = (): any => {
    const width = 600,
      height = 600,
      radius = 32;
    const svg = d3
      .create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("stroke-width", 2);

    const circles = d3.range(20).map(i => ({
      x: Math.random() * (width - radius * 2) + radius,
      y: Math.random() * (height - radius * 2) + radius,
    }));

    svg
      .selectAll("circle")
      .data(circles)
      .join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", radius)
      .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
      .call(drag());

    return svg.node();
  };

  useEffect(() => {
    const container = document.getElementById("canvas");
    const svgNode = createSvg();
    container?.appendChild(svgNode);
  }, []);

  return <div id="canvas"></div>;
};

export default ReactD3Demo;
