var generate = function (numRows) {
  // dp即为杨辉三角,dp[i][j]即为第i+1行j+1列元素
  const dp = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(1);
  }
  // 遍历
  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      // 转移方程
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
