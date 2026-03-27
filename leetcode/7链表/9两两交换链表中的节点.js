var swapPairs = function (head) {
  const dummyNode = new ListNode(-1, head);
  let cur = dummyNode;
  while (cur && cur.next && cur.next.next) {
    const next1 = cur.next; // 当前节点下一个节点
    const next2 = cur.next.next; // 当前节点下下一个节点
    cur.next = next2;
    next1.next = next2.next;
    next2.next = next1;
    cur = next1;
  }
  return dummyNode.next;
};
