var sortList = function (head) {
  // 遍历一次链表将值放入数组中，将数组升序排列后遍历数据构建链表
  const nodeValList = [];
  let cur = head;
  while (cur) {
    nodeValList.push(cur.val);
    cur = cur.next;
  }
  nodeValList.sort((pre, next) => pre - next);
  const dummyNode = new ListNode();
  cur = dummyNode;
  for (const nodeVal of nodeValList) {
    cur.next = new ListNode(nodeVal);
    cur = cur.next;
  }
  return dummyNode.next;
};
