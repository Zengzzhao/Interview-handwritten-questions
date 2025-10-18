var numSquares = function (n) {
    // dp[i]表示值为i时的完全平方数的最少数量
    const dp = new Array(n + 1).fill(Infinity)
    // 初始化
    dp[0] = 0
    // 遍历
    for (let i = 1; i <= n; i++) {
        // 对于每个值i，
        // 从1*1开始到j*j大于i时停止，每次试x*x时此时i还剩i-x*x，此时最少还需要dp[i-x*x]+1(x*x本身)，每次试完与当前dp[i]所记录的最小值比较进行更新，直到比到j*j大于i时
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
        }
    }
    return dp[n]
};