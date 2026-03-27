var addTwoNumbers = function (l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  const dummyNode = new ListNode();
  let cur = dummyNode;
  let jinwei = 0; // 进位
  // 处理两个链表等长部分
  while (cur1 && cur2) {
    const sum = cur1.val + cur2.val + jinwei;
    const curVal = sum % 10;
    jinwei = Math.floor(sum / 10);
    cur.next = new ListNode(curVal);
    cur = cur.next;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  // 单独处理更长链表
  if (!cur1 && cur2) {
    while (cur2) {
      const sum = cur2.val + jinwei;
      const curVal = sum % 10;
      jinwei = Math.floor(sum / 10);
      cur.next = new ListNode(curVal);
      cur2 = cur2.next;
      cur = cur.next;
    }
  }
  if (!cur2 && cur1) {
    while (cur1) {
      const sum = cur1.val + jinwei;
      const curVal = sum % 10;
      jinwei = Math.floor(sum / 10);
      cur.next = new ListNode(curVal);
      cur1 = cur1.next;
      cur = cur.next;
    }
  }
  // 还有进位
  if (jinwei) {
    cur.next = new ListNode(jinwei);
  }
  return dummyNode.next;
};
