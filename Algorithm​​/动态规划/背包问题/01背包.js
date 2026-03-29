const weight = [2, 2, 3, 1, 5, 2];
const value = [2, 3, 1, 5, 4, 3];
const size = 1;

/**
 * @param {number[]} weight 物品重量
 * @param {number[]} value 物品价值
 * @param {number} size 背包容量
 */
// 二维dp
function bag01(weight, value, size) {
  // dp[i][j]表示从0-i的物品中任选，放入容量j的背包中，所得到的最大价值
  const dp = new Array(weight.length)
    .fill()
    .map(() => new Array(size + 1).fill(0));
  // 初始化
  // 背包容量为0时装不了任何物品，最大价值为0（创建时已经初始化）
  // 对于第一个物品，看背包容量是否装得下（下面循环初始化）
  for (let i = 0; i <= size; i++) {
    dp[0][i] = size > weight[0] ? value[0] : 0;
  }
  // 遍历
  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j <= size; j++) {
      if (size < weight[i]) {
        // 放不下
        dp[i][j] = dp[i - 1][j];
      } else {
        // 放得下
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  return dp[weight.length - 1][size];
}
console.log(bag01(weight, value, size));

// 一维dp
function bag012(weight, value, size) {
  // dp[i]表示背包容量为i时，装入的物品的最大价值
  const dp = new Array(size + 1).fill(0);
  // 遍历
  // 外层为物品，从前到后
  for (let i = 0; i < weight.length; i++) {
    // 内层为背包容量，从大到小
    for (let j = size; j >= weight[i]; j--) {
      if (j < weight[i]) {
        // 放不下
        dp[j] = dp[j];
      } else {
        // 放得下
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
      }
    }
  }
  return dp[size];
}
console.log(bag012(weight, value, size));
