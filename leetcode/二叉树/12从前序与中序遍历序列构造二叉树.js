var buildTree = function (preorder, inorder) {
    function genTree(pre, ino) {
        if (!pre.length || !ino.length) return null
        const rootVal = pre[0] // 根节点的值
        const inoRootIndex = ino.indexOf(rootVal) // 根节点在中序序列中的索引index
        const leftIno = ino.slice(0, inoRootIndex) // 左子树的中序序列
        const leftPre = pre.slice(1, leftIno.length + 1) // 左子树的先序序列
        const rightIno = ino.slice(inoRootIndex + 1) // 右子树的中序序列
        const rightPre = pre.slice(inoRootIndex + 1) // 右子树的先序序列
        const leftNode = genTree(leftPre, leftIno)
        const rightNode = genTree(rightPre, rightIno)
        const root = new TreeNode(rootVal, leftNode, rightNode)
        return root
    }
    return genTree(preorder, inorder)
}