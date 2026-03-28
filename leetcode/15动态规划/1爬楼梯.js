var climbStairs = function (n) {
  // dp[n]表示爬到第n阶楼梯的方法数
  const dp = new Array(n);
  // 初始化
  dp[0] = 1;
  dp[1] = 1;
  // 遍历
  for (let i = 2; i <= n; i++) {
    // 转换方程
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
