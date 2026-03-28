// https://leetcode.cn/problems/reorder-list/
// 1-2-3-4 => 1-4-2-3
// 1-2-3-4-5 => 1-5-2-4-3
var reorderList = function (head) {
  // 找链表中点
  let fast = head,
    slow = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 反转中点后的链表
  let postCur = slow.next;
  slow.next = null; // 断开两个链表
  let pre = null;
  // 反转：每次让后面节点指向前面节点，然后两个指针顺移
  while (postCur) {
    const next = postCur.next;
    postCur.next = pre;
    pre = postCur;
    postCur = next;
  }
  postCur = pre;
  // 交替拼接合并两个链表
  let preCur = head;
  while (postCur) {
    const preCurNext = preCur.next;
    const postCurNext = postCur.next;
    preCur.next = postCur;
    postCur.next = preCurNext;
    preCur = preCurNext;
    postCur = postCurNext;
  }
};
