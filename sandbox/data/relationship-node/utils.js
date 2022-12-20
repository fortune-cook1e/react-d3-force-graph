const MAX_LEVEL = 2;
const MAX_CHILDREN_LENGTH = 2;

/**
 * 生成随机字符串
 * @param {number} len
 * @returns
 */
const randomString = len => {
  const length = len || 32;
  const $chars =
    "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const maxPos = $chars.length;
  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

// 生成树数据
const generateTree = (_level = MAX_LEVEL, prevId, _parent) => {
  const parent = _parent || generateTreeNode(prevId);
  const children = [];
  if (_level === 0) return parent;

  for (let i = 0; i < MAX_CHILDREN_LENGTH; i++) {
    const node = generateTreeNode(parent.id);
    children.push(node);
  }
  parent.children = children;
  const level = _level - 1;
  children.forEach((node, index) => {
    return generateTree(level, node.id, node);
  });
  return parent;
};

const generateTreeNode = (prevId = "") => {
  return {
    id: randomString(),
    properties: {
      avatar: "https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png",
      name: randomString(5),
      count: Math.floor(Math.random() * 40),
      role: randomString(5),
    },
    prevId,
    children: [],
  };
};

const treeToResponseData = treeData => {
  const _nodes = generateNodesByTree(treeData);
  const _relationships = generateRelationshipsByTree(treeData);

  return {
    nodes: _nodes,
    relationships: _relationships,
  };
};

/**
 * @description 根据树结构数据生成 nodes 数据
 * @date 2022-12-13 17:04:50
 */
const generateNodesByTree = (treeData, tns) => {
  const _tns = tns || [];
  const { id, properties } = treeData;

  const node = {
    id,
    properties,
  };

  _tns.push(node);

  treeData.children?.forEach(c => {
    generateNodesByTree(c, _tns);
  });

  return _tns;
};

/**
 * @description 根据树结构数据生成relation数据
 * @date 2022-12-13 17:05:05
 */

const generateRelationshipsByTree = (treeData, tns) => {
  const _tns = tns || [];
  const { id, prevId } = treeData;

  const relationData = generateRelationData(prevId, id);

  _tns.push(relationData);

  treeData.children?.forEach(c => {
    generateRelationshipsByTree(c, _tns);
  });

  return _tns.filter(t => t.startNode !== "");
};

const generateRelationData = (start, end) => {
  return {
    id: randomString(),
    startNode: start,
    endNode: end,
    type: Math.floor(Math.random() * 2) === 0 ? 0 : 1,
    text: randomString(5),
  };
};

const responseToRelationData = resData => {
  return {
    nodes: resData.nodes,
    links: resData.relationships.map(r => ({
      ...r,
      source: r.startNode,
      target: r.endNode,
      strokeDasharray: r.type === 0 ? 8 : 0,
    })),
    rootId: resData.nodes[0].id,
  };
};

// mock Data
const treeData = generateTree();
const responseData = treeToResponseData(treeData);
const relationshipsData = responseToRelationData(responseData);

module.exports = { treeToResponseData, generateTree, relationshipsData };
