var invertTree = function (root) {
    function invert(node) {
        if (!node) return
        // 使用后序方法,先递归将子节点翻转,最后再将当前节点的子节点翻转
        invert(node.left)
        invert(node.right)
        const temp = node.left
        node.left = node.right
        node.right = temp
    }
    invert(root)
    return root
}