var maxDepth = function (root) {
    function order(node) {
        if (!node) return 0
        const leftDep = order(node.left)
        const rightDep = order(node.right)
        return Math.max(leftDep, rightDep) + 1
    }
    return order(root)
}