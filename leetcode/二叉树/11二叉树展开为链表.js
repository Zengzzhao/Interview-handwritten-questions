var flatten = function (root) {
    // 先序遍历中当前访问节点的前一个节点
    let pre = null
    function preOder(node) {
        if (!node) return
        const left = node.left
        const right = node.right
        // 将前一个节点的指针修改
        if (pre) {
            pre.right = node
            pre.left = null
        }
        pre = node
        preOder(left)
        preOder(right)
    }
    preOder(root)
}