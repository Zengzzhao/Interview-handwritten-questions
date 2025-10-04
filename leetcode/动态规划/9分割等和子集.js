// 01背包问题，背包容量为数组和一半half，物品为数组中每个数，我们能否从nums中凑出half
var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b, 0); // 数组和
    if (sum % 2 !== 0) return false; // 数组一半不是整数
    const half = sum / 2; // 数组和一半
    // dp[i]表示能否用nums中的数字凑出i
    const dp = new Array(half + 1).fill(false);
    // 初始化
    dp[0] = true;
    // 遍历，外层为所有可能的数，内层为需要凑的数
    for (const num of nums) {
        // j反向从最大的half开始向前遍历，确保dp[j-num]是上一轮num遍历完的状态，避免正向遍历时重复取当前num多次
        // 如当前num为1，half为4
        // 如果从1开始取，dp[1]=dp[i]||dp[0]--true此时取1
        // dp[2]=dp[2]|dp[1]--true此时1又被重复取了一次

        // 如果从4开始取，dp[4]=dp[4]||dp[3]--false
        // dp[3]=dp[3]||dp[2]--false
        // dp[2]=dp[2]||dp[1]--false
        // dp[1]=dp[1]||dp[0]--true
        // 从开始到结束1都只取了一次
        for (let j = half; j >= num; j--) {
            // 如果我们不选num，那么dp[j]延用之前的dp[j]保持不变
            // 如果我们选num，那么dp[j]取决于dp[j-num]
            dp[j] = dp[j] || dp[j - num];
        }
    }
    return dp[half];
};