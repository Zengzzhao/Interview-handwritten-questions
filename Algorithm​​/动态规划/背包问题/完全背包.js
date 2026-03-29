const weight = [1, 2, 3, 4];
const value = [2, 4, 4, 5];
const size = 5;

/**
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @param {number} size 背包容量
 */
// 二维dp
function bagAll(weight, value, size) {
  // dp[i][j]表示从物品0-i任选放入容量为j的背包中，所得到的最大价值
  const dp = new Array(weight.length)
    .fill()
    .map(() => new Array(size + 1).fill(0));
  // 初始化
  // 背包容量为0时装不了任何物品，最大价值为0（创建时已经初始化）
  // 对于第一个物品,背包容量装得下就一直装
  for (let i = 0; i <= size; i++) {
    dp[0][i] = i < weight[0] ? 0 : dp[0][i - weight[0]] + value[0];
  }
  // 遍历
  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j <= size; j++) {
      if (j < weight[i]) {
        // 装不下
        dp[i][j] = dp[i - 1][j];
      } else {
        // 装得下(与01背包相比,在装入物品i的情况下有区别，因为每件物品可以重复取，所以装入物品i后可选范围任然为0-i)
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight[i]] + value[i]);
      }
    }
  }
  return dp[weight.length - 1][size];
}
console.log(bagAll(weight, value, size));

// 一维dp
function bagAll2(weight, value, size) {
  // dp[i]表示背包容量为i时得到的最大价值
  const dp = new Array(size + 1).fill(0);
  for (let i = 0; i < weight.length; i++) {
    for (let j = 0; j <= size; j++) {
      if (j < weight[i]) {
        dp[j] = dp[j];
      } else {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
      }
    }
  }
  return dp[size];
}
console.log(bagAll2(weight, value, size));
