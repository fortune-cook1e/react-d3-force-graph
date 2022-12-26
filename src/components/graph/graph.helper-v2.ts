import { GraphStateNode } from "../../types/node";
import { GraphStateLink } from "../../types/link";
import { GraphConfig, GraphProps, GraphState, D3LinkItem, GraphData } from "../../types/graph";
import {
  forceX as d3ForceX,
  forceY as d3ForceY,
  forceSimulation as d3ForceSimulation,
  forceManyBody as d3ForceManyBody,
  forceCenter,
  Simulation,
} from "d3-force";
import { select as d3Select } from "d3-selection";
import { zoom as d3Zoom, zoomIdentity as d3ZoomIdentity } from "d3-zoom";
import { computeNodeDegree } from "./collapse.helper";

import { isDeepEqual, isEmptyObject, merge, pick, antiPick, throwErr, logWarning } from "../../utils";
import ERRORS from "../../err";
import DEFAULT_CONFIG from "./graph.config";
import CONST from "./graph.const";

const NODE_PROPS_WHITELIST = ["id", "highlighted", "x", "y", "index", "vy", "vx"];

/**
 * Create d3 forceSimulation to be applied on the graph.<br/>
 * {@link https://github.com/d3/d3-force#forceSimulation|d3-force#forceSimulation}<br/>
 * {@link https://github.com/d3/d3-force#simulation_force|d3-force#simulation_force}<br/>
 * Wtf is a force? {@link https://github.com/d3/d3-force#forces| here}
 * @param  {number} width - the width of the container area of the graph.
 * @param  {number} height - the height of the container area of the graph.
 * @param  {number} gravity - the force strength applied to the graph.
 * @returns {Object} returns the simulation instance to be consumed.
 * @memberof Graph/helper
 */
function _createForceSimulation<T, W>(width: number, height: number, gravity = 0): Simulation<any, any> {
  const frx = d3ForceX(width / 2).strength(CONST.FORCE_X);
  const fry = d3ForceY(height / 2).strength(CONST.FORCE_Y);
  const forceStrength = gravity;

  return d3ForceSimulation()
    .force("charge", d3ForceManyBody().strength(forceStrength))
    .force("x", frx)
    .force("y", fry)
    .force("center", forceCenter(width / 2, height / 2)); // Tip: 增加 center 让图表快速定位渲染
}

/**
 * This function updates the highlighted value for a given node and also updates highlight props.
 * @param {Object.<string, Object>} nodes - an object containing all nodes mapped by their id.
 * @param {Object.<string, Object>} links - an object containing a matrix of connections of the graph.
 * @param {Object} config - an object containing rd3g consumer defined configurations {@link #config config} for the graph.
 * @param {string} id - identifier of node to update.
 * @param {string} value - new highlight value for given node.
 * @returns {Object} returns an object containing the updated nodes
 * and the id of the highlighted node.
 * @memberof Graph/helper
 */
export function updateNodeHighlightedValue(
  nodes: Record<string, GraphStateNode>,
  links: GraphStateLink,
  config: GraphConfig,
  id: string,
  value = false
): { nodes: Record<string, GraphStateNode>; highlightedNode: string } {
  // FixBug: 解决浅拷贝导致D3 Drag-Event失效bug
  const highlightedNode = value ? id : "";
  nodes[id].highlighted = value;

  // when highlightDegree is 0 we want only to highlight selected node
  if (links[id] && config.highlightDegree !== 0) {
    Object.keys(links[id]).forEach(id => {
      nodes[id].highlighted = value;
    });
  }

  return {
    nodes,
    highlightedNode,
  };
}

/**
 * Some integrity validations on links and nodes structure. If some validation fails the function will
 * throw an error.
 * @param  {Object} data - Same as {@link #initializeGraphState|data in initializeGraphState}.
 * @throws can throw the following error or warning msg:
 * INSUFFICIENT_DATA - msg if no nodes are provided
 * INVALID_LINKS - if links point to nonexistent nodes
 * INSUFFICIENT_LINKS - if no links are provided (not even empty Array)
 * @returns {undefined}
 * @memberof Graph/helper
 */
function _validateGraphData(data: GraphData) {
  if (!data.nodes || !data.nodes.length) {
    logWarning("Graph", ERRORS.INSUFFICIENT_DATA);
    data.nodes = [];
  }

  if (!data.links) {
    logWarning("Graph", ERRORS.INSUFFICIENT_LINKS);
    data.links = [];
  }

  const n = data.links.length;

  for (let i = 0; i < n; i++) {
    const l = data.links[i];

    if (!data.nodes.find(n => n.id === l.source)) {
      throwErr("Graph", `${ERRORS.INVALID_LINKS} - "${l.source}" is not a valid source node id`);
    }

    if (!data.nodes.find(n => n.id === l.target)) {
      throwErr("Graph", `${ERRORS.INVALID_LINKS} - "${l.target}" is not a valid target node id`);
    }

    if (l && l.value !== undefined && typeof l.value !== "number") {
      throwErr(
        "Graph",
        `${ERRORS.INVALID_LINK_VALUE} - found in link with source "${l.source}" and target "${l.target}"`
      );
    }
  }
}

/**
 * This function extracts an id from a link.
 * **Why this function?**
 * According to [d3-force](https://github.com/d3/d3-force#link_links)
 * d3 links might be initialized with "source" and "target"
 * properties as numbers or strings, but after initialization they
 * are converted to an object. This small utility functions ensures
 * that weather in initialization or further into the lifetime of the graph
 * we always get the id.
 * @param {Object|string|number} sot source or target
 * of the link to extract id.
 * we want to extract an id.
 * @returns {string|number} the id of the link.
 * @memberof Graph/helper
 */
function getId(sot: GraphStateNode): string | GraphStateNode {
  return sot.id !== undefined && sot.id !== null ? sot.id : sot;
}

/**
 * Maps an input link (with format `{ source: 'sourceId', target: 'targetId' }`) to a d3Link
 * (with format `{ source: { id: 'sourceId' }, target: { id: 'targetId' } }`). If d3Link with
 * given index exists already that same d3Link is returned.
 * @param {Object} link - input link.
 * @param {number} index - index of the input link.
 * @param {Array.<Object>} d3Links - all d3Links.
 * @param  {Object} config - same as {@link #graphrenderer|config in renderGraph}.
 * @param {Object} state - Graph component current state (same format as returned object on this function).
 * @returns {Object} a d3Link.
 * @memberof Graph/helper
 */
function _mergeDataLinkWithD3Link(link: any, index: number, d3Links = [], config: GraphConfig, state = {}) {
  // find the matching link if it exists
  const tmp = d3Links.find(l => l.source.id === link.source && l.target.id === link.target);
  const d3Link = tmp && pick(tmp, LINK_PROPS_WHITELIST);
  const customProps = antiPick(link, ["source", "target"]);

  if (d3Link) {
    const toggledDirected =
      state.config &&
      Object.prototype.hasOwnProperty.call(state.config, "directed") &&
      config.directed !== state.config.directed;
    const refinedD3Link = {
      index,
      ...d3Link,
      ...customProps,
    };

    // every time we toggle directed config all links should be visible again
    if (toggledDirected) {
      return { ...refinedD3Link, isHidden: false };
    }

    // every time we disable collapsible (collapsible is false) all links should be visible again
    return config.collapsible ? refinedD3Link : { ...refinedD3Link, isHidden: false };
  }

  const highlighted = false;
  const source = {
    id: link.source,
    highlighted,
  };
  const target = {
    id: link.target,
    highlighted,
  };

  return {
    index,
    source,
    target,
    ...customProps,
  };
}

/**
 * Receives a matrix of the graph with the links source and target as concrete node instances and it transforms it
 * in a lightweight matrix containing only links with source and target being strings representative of some node id
 * and the respective link value (if non existent will default to 1).
 * @param  {Array.<Link>} graphLinks - an array of all graph links.
 * @param  {Object} config - the graph config.
 * @returns {Object.<string, Object>} an object containing a matrix of connections of the graph, for each nodeId,
 * there is an object that maps adjacent nodes ids (string) and their values (number).
 * @memberof Graph/helper
 */
function _initializeLinks(graphLinks: D3LinkItem[], config: GraphConfig): GraphStateLink {
  return graphLinks.reduce((links: GraphStateLink, l) => {
    const source = getId(l.source) as string;
    const target = getId(l.target) as string;

    if (!links[source]) {
      links[source] = {};
    }

    if (!links[target]) {
      links[target] = {};
    }

    const value = config.collapsible && l.isHidden ? 0 : l.value || 1;

    links[source][target] = value;

    if (!config.directed) {
      links[target][source] = value;
    }

    return links;
  }, {});
}

/**
 * Method that initialize graph nodes provided by rd3g consumer and adds additional default mandatory properties
 * that are optional for the user. Also it generates an index mapping, this maps nodes ids the their index in the array
 * of nodes. This is needed because d3 callbacks such as node click and link click return the index of the node.
 * @param  {Array.<Node>} graphNodes - the array of nodes provided by the rd3g consumer.
 * @returns {Object.<string, Object>} returns the nodes ready to be used within rd3g with additional properties such as x, y
 * and highlighted values.
 * @memberof Graph/helper
 */
function initializeNodes(graphNodes: GraphStateNode[]): Record<string, GraphStateNode> {
  const nodes: Record<string, GraphStateNode> = {};
  const n = graphNodes.length;

  for (let i = 0; i < n; i++) {
    const node = graphNodes[i];

    node.highlighted = false;

    // if an fx (forced x) is given, we want to use that
    if (Object.prototype.hasOwnProperty.call(node, "fx")) {
      node.x = node.fx;
    } else if (!Object.prototype.hasOwnProperty.call(node, "x")) {
      node.x = 0;
    }

    // if an fy (forced y) is given, we want to use that
    if (Object.prototype.hasOwnProperty.call(node, "fy")) {
      node.y = node.fy;
    } else if (!Object.prototype.hasOwnProperty.call(node, "y")) {
      node.y = 0;
    }

    nodes[node.id.toString()] = node;
  }

  return nodes;
}

/**
 * Tags orphan nodes with a `_orphan` flag.
 * @param {Object.<string, Object>} nodes - nodes mapped by their id.
 * @param {Object.<string, Object>} linksMatrix - an object containing a matrix of connections of the graph, for each nodeId,
 * there is an object that maps adjacent nodes ids (string) and their values (number).
 * @returns {Object.<string, Object>} same input nodes structure with tagged orphans nodes where applicable.
 * @memberof Graph/helper
 */
function _tagOrphanNodes(nodes: Record<string, GraphStateNode>, linksMatrix: GraphStateLink) {
  return Object.keys(nodes).reduce((acc: Record<string, GraphStateNode>, nodeId) => {
    const { inDegree, outDegree } = computeNodeDegree(nodeId, linksMatrix);
    const node = nodes[nodeId];
    const taggedNode = inDegree === 0 && outDegree === 0 ? { ...node, _orphan: true } : node;

    acc[nodeId] = taggedNode;

    return acc;
  }, {});
}

/**
 * Encapsulates common procedures to initialize graph.
 * @param {Object} graphProps - Graph component props, object that holds data, id and config.
 * @param {Object} graphProps.data - Data object holds links (array of **Link**) and nodes (array of **Node**).
 * @param {string} graphProps.id - the graph id.
 * @param {Object} graphProps.config - same as {@link #graphrenderer|config in renderGraph}.
 * @param {Object} state - Graph component current state (same format as returned object on this function).
 * @returns {Object} a fully (re)initialized graph state object.
 * @memberof Graph/helper
 */
export function initializeGraphState(graphProps: GraphProps, state?: any): GraphState {
  const { id, data, config } = graphProps;
  _validateGraphData(data);

  let graph;

  if (state && state.nodes) {
    graph = {
      nodes: data.nodes.map(n =>
        state.nodes[n.id] ? { ...n, ...pick(state.nodes[n.id], NODE_PROPS_WHITELIST) } : { ...n }
      ),
      links: data.links.map((l, index) => _mergeDataLinkWithD3Link(l, index, state && state.d3Links, config, state)),
    };
  } else {
    graph = {
      nodes: data.nodes.map(n => ({ ...n })),
      links: data.links.map(l => ({ ...l })),
    };
  }

  const newConfig = { ...merge(DEFAULT_CONFIG, config || {}) } as GraphConfig;
  const links = _initializeLinks(graph.links, newConfig); // matrix of graph connections
  const nodes = _tagOrphanNodes(initializeNodes(graph.nodes), links);
  const { nodes: d3Nodes, links: d3Links } = graph;
  const formatedId = id.replace(/ /g, "_");
  const simulation = _createForceSimulation(newConfig.width, newConfig.height, newConfig?.d3?.gravity);
  const { minZoom = 0, maxZoom = 0, focusZoom = 0 } = newConfig;

  if (focusZoom > maxZoom) {
    newConfig.focusZoom = maxZoom;
  } else if (focusZoom < minZoom) {
    newConfig.focusZoom = minZoom;
  }

  return {
    id: formatedId,
    config: newConfig,
    links,
    d3Links,
    nodes,
    d3Nodes,
    highlightedNode: "",
    simulation,
    newGraphElements: false,
    configUpdated: false,
    transform: { x: 0, y: 0, k: 1 },
    draggedNode: null,
  };
}
