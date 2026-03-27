var reverseList = function (head) {
    let cur = head
    const dummnyNode = new ListNode() // 虚拟头结点
    while (cur) {
        const curNext = cur.next
        cur.next = dummnyNode.next
        dummnyNode.next = cur
        cur = curNext
    }
    return dummnyNode.next
};