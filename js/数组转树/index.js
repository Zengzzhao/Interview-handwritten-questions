const arr = [
    { id: 1, name: "Node 1" },
    { id: 2, name: "Node 2", parentId: 1 },
    { id: 3, name: "Node 3", parentId: 1 },
    { id: 4, name: "Node 4", parentId: 2 },
    { id: 5, name: "Node 5", parentId: 2 },
    { id: 6, name: "Node 6", parentId: 3 },
];
function buildTree(arr, parentId) {
    const tree = []
    for (const node of arr) {
        if (node.parentId == parentId) {
            const child = buildTree(arr, node.id)
            if (child.length) {
                node.child = child
            }
            tree.push(node)
        }
    }
    return tree
}
const tree = buildTree(arr)
console.log(JSON.stringify(tree));