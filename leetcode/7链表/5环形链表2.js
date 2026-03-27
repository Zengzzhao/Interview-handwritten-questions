var detectCycle = function (head) {
  const set = new Set();
  let cur = head;
  while (cur) {
    if (set.has(cur)) return cur;
    set.add(cur);
    cur = cur.next;
  }
  return null;
};
