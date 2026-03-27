var copyRandomList = function (head) {
  // 存储原节点与拷贝后节点的映射
  const map = new Map();
  // 遍历原链表，构建复制的链表与映射
  let cur = head;
  while (cur) {
    const copyNode = new _Node(cur.val);
    map.set(cur, copyNode);
    cur = cur.next;
  }
  map.set(null, null);
  // 遍历原链表，根据原节点指针与映射构建拷贝后节点的指针
  cur = head;
  while (cur) {
    const curNode = map.get(cur);
    const curNext = map.get(cur.next);
    const curRandom = map.get(cur.random);
    curNode.next = curNext;
    curNode.random = curRandom;
    cur = cur.next;
  }
  return map.get(head);
};
