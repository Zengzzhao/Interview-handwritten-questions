var rob = function (nums) {
    // dp[i]表示考虑前i个房子时能偷窃的最大金额数
    const dp = []
    // 初始化
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    // 遍历
    for (let i = 2; i < nums.length; i++) {
        // 状态转移方程
        // 对于第i个房子小偷只有两种选择
        // 1.不偷第i个房子，此时最大金额为考虑前i-1个房子时的最大金额
        // 2.偷第i个房子不能偷第i-1个，此时最大金额为考虑前i-2个房子的最大金额+第i个房子的金额
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
}