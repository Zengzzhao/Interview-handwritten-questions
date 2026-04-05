const arr = [
  { id: 1, name: "Node 1" },
  { id: 2, name: "Node 2", parentId: 1 },
  { id: 3, name: "Node 3", parentId: 1 },
  { id: 4, name: "Node 4", parentId: 2 },
  { id: 5, name: "Node 5", parentId: 2 },
  { id: 6, name: "Node 6", parentId: 3 },
  { id: 7, name: "Node 7" },
  { id: 8, name: "Node 8", parentId: 7 },
  { id: 9, name: "Node 9", parentId: 7 },
];
function buildTree(arr) {
  const tree = [];
  const map = new Map(); // 存储每个node的id与node的映射
  // 构建map
  for (const node of arr) {
    map.set(node.id, { ...node, children: [] });
  }
  // 遍历数组，构建树
  for (const node of arr) {
    // 有parentId为子节点
    if (node.parentId) {
      // 将当前节点放入parent节点的children中
      map.get(node.parentId).children.push(map.get(node.id));
    }
    // 没有parentId为根节点
    else {
      tree.push(map.get(node.id));
    }
  }
  return tree;
}
const tree = buildTree(arr);
console.log(JSON.stringify(tree));
