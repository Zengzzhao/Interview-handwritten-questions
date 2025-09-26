var coinChange = function (coins, amount) {
    // dp[i]表示总金额为i时所需的硬币的最少个数
    const dp = new Array(amount + 1).fill(Infinity)
    // 初始化
    dp[0] = 0
    // 遍历
    for (let i = 1; i <= amount; i++) {
        // dp[i]从coins中第一个开始试，取出coins[j]为x，此时还需要i-x块，相当于最少硬币数为dp[i-x]+1(当前硬币金额自身)个，每次试玩与当前dp[i]表示的最少硬币数比较更新
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            }
        }
    }
    if (dp[amount] !== Infinity) return dp[amount]
    else return -1
};