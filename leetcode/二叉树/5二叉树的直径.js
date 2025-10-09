var diameterOfBinaryTree = function (root) {
    let result = 0
    function postOrder(node) {
        if (!node) return 0
        // 递归算出当前节点左侧的深度、右侧的深度
        const leftDir = postOrder(node.left)
        const rightDir = postOrder(node.right)
        // 树的直径就节点左侧深度+右侧深度与当前result的大的那个
        result = Math.max(result, leftDir + rightDir)
        // 当前节点的深度为左侧与右侧深度的最大值+自身(1)
        return Math.max(leftDir, rightDir) + 1
    }
    postOrder(root)
    return result
}