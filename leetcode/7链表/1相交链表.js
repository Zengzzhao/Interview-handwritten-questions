var getIntersectionNode = function (headA, headB) {
  // 存储链表1所有节点
  const set = new Set();
  let cur = headA;
  while (cur) {
    set.add(cur);
    cur = cur.next;
  }
  // 遍历链表2，判断当前节点是否在链表1中出现过，若出现过则为相交节点
  cur = headB;
  while (cur) {
    if (set.has(cur)) return cur;
    cur = cur.next;
  }
  return null;
};
