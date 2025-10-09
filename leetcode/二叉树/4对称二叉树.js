var isSymmetric = function (root) {
    function compare(left, right) {
        // 传入的左节点与右节点都没有，返回true
        if (!left && !right) return true
        // 传入的左节点与右节点都有
        else if (left && right) {
            // 如果左节点的值=右节点的值，且左右节点仍然是对称的，返回true
            if (left.val === right.val && compare(left.left, right.right) && compare(left.right, right.left)) return true
            else return false
        }
        // 传入的左节点与右节点有一个没有，直接返回false
        else return false
    }
    return compare(root.left, root.right)
}