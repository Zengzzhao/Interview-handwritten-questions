var isPalindrome = function (head) {
  const nodeVal = [];
  let cur = head;
  while (cur) {
    nodeVal.push(cur.val);
    cur = cur.next;
  }
  const copy = [...nodeVal]; // 数组的reverse会原地修改数据，先浅拷贝一份原来的数组
  nodeVal.reverse();
  for (let i = 0; i < nodeVal.length; i++) {
    if (nodeVal[i] != copy[i]) return false;
  }
  return true;
};
