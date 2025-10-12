var rightSideView = function (root) {
    const result = []
    // 按照本节点-右孩子-左孩子的顺序遍历
    function order(node, deep) {
        if (!node) return
        // 当前节点是本层右侧第一个节点
        if (result.length === deep) result.push(node.val);
        order(node.right, deep + 1);
        order(node.left, deep + 1);
    }
    order(root, 0)
    return result
}