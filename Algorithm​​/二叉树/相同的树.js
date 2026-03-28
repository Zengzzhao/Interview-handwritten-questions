// https://leetcode.cn/problems/same-tree/description/
// 判断两棵二叉树是否相同
var isSameTree = function (p, q) {
  // p、q都是null
  if (p == null && q == null) return true;
  // p、q只有一个为null
  if (p == null || q == null) return false;
  // p、q都不为null
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
