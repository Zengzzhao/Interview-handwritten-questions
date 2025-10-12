var isValidBST = function (root) {
    // 上下界约束，min为下界，max为上界
    function check(node, min, max) {
        // node为空时，返回true
        if (!node) return true
        // 当前node不满足上下界
        if (node.val <= min || node.val >= max) return false
        // 递归判断当前节点的左节点、右节点
        return check(node.left, min, node.val) && check(node.right, node.val, max)
    }
    return check(root, -Infinity, Infinity)
}