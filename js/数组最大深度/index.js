const arr1 = [1, [2, [3, [4, 5]]]]; // 4
const arr2 = [
  [1, 2],
  [3, [4]],
]; // 3

// 类似于求k叉树的深度
function getDepth(arr) {
  if (!Array.isArray(arr)) return 0;
  if (arr.length == 0) return 1;
  let maxDepth = 0;
  for (const ele of arr) {
    const curDepth = getDepth(ele);
    if (curDepth > maxDepth) {
      maxDepth = curDepth;
    }
  }
  return maxDepth + 1;
}
