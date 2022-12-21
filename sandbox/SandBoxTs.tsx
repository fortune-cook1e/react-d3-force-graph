import React, { useEffect, useMemo, useState } from "react";
import defaultConfig from "../src/components/graph/graph.config";
import { Graph, GraphV2 } from "../src";
import { loadDataset } from "./utils";
import "./sandbox.css";

const { config: configOverride, data, fullscreen } = loadDataset();
const config = Object.assign(defaultConfig, configOverride);

const graphData = {
  nodes: data.nodes.map((n: any, index: number) => ({
    ...n,
    properties: { ...n.properties, root: index === 0 },
  })),
  links: data.links,
  focusedNodeId: data.rootId,
};

const SandBoxTs = (): JSX.Element => {
  const [zoomNum, setZoomNum] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const [graphConfig, setGraphConfig] = useState<any>(null);
  const [cKey, setCKey] = useState<number>(0);

  const mockPromiseGetData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(graphData);
      }, 1000);
    });
  };

  const _config = {
    id: "graph",
    data: graphData,
    config: {
      ...config,
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };

  const initData = async () => {
    setLoading(true);
    const data = await mockPromiseGetData();
    setGraphConfig({
      id: "graph",
      data,
      config: {
        ...config,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
    // setReady(true);
  };

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    if (ready) {
      setGraphConfig(c => ({
        ...c,
      }));
      setCKey(c => c++);
    }
  }, [ready]);

  const onZoomChange = (val: number) => {
    setZoomNum(val);
    console.log("zoom change");
  };
  const onNodePositionChange = val => {
    console.log("posichange...", { val });
  };

  return (
    <>
      <div className="zoom-container">{zoomNum}</div>
      {/* <Graph {..._config} /> */}
      {/* {graphConfig && <Graph {..._config} />} */}
      {/* <GraphV2 {..._config} /> */}
      {graphConfig && <GraphV2 key={cKey} {...graphConfig} />}
    </>
  );
};

export default SandBoxTs;
