var sortedArrayToBST = function (nums) {
    function gen(left, right) {
        // 如果左边界超过右边界，返回null
        if (left > right) return null
        // 获取中间值作为根的元素值
        const mid = Math.ceil((left + right) / 2)
        const leftNode = gen(left, mid - 1)
        const rightNode = gen(mid + 1, right)
        const root = new TreeNode(nums[mid])
        root.left = leftNode
        root.right = rightNode
        return root
    }
    return gen(0, nums.length - 1)
}