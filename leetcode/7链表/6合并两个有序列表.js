var mergeTwoLists = function (list1, list2) {
  let cur1 = list1;
  let cur2 = list2;
  const dummyNode = new ListNode();
  let cur = dummyNode;
  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      cur.next = cur1;
      cur1 = cur1.next;
    } else {
      cur.next = cur2;
      cur2 = cur2.next;
    }
    cur = cur.next;
  }
  // 某个链表还有剩余
  if (!cur1) cur.next = cur2;
  if (!cur2) cur.next = cur1;
  return dummyNode.next;
};
