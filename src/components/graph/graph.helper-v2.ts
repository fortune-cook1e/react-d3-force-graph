import { GraphStateNode } from "../../types/node";
import { GraphStateLink } from "../../types/link";
import { GraphConfig } from "../../types/graph";

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
) {
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
