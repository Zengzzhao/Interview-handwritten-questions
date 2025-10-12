var kthSmallest = function (root, k) {
    let result
    // 中序从最小的元素开始遍历
    function inOrder(node) {
        if (!node) return
        inOrder(node.left)
        // 对当前节点处理
        k--
        if(k===0) result=node.val
        if(k<0) return
        inOrder(node.right)
    }
    inOrder(root)
    return result
}