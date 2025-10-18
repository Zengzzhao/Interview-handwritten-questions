var maxProduct = function (nums) {
    // mindp[i]表示以nums[i]结尾的子数组的最小乘积
    // maxdp[i]表示以nums[i]结尾的子数组的最大乘积
    const minDp = new Array(nums.length)
    const maxDp = new Array(nums.length)
    // 初始化
    minDp[0] = nums[0]
    maxDp[0] = nums[0]
    // 遍历
    for (let i = 1; i < nums.length; i++) {
        minDp[i] = Math.min(nums[i], minDp[i - 1] * nums[i], maxDp[i - 1] * nums[i])
        maxDp[i] = Math.max(nums[i], minDp[i - 1] * nums[i], maxDp[i - 1] * nums[i])
    }
    return Math.max(...maxDp)
}