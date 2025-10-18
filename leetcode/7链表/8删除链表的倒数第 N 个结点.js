var removeNthFromEnd = function (head, n) {
    const dummyNode = new ListNode(-1, head) // 虚拟头节点
    let fast = dummyNode, slow = dummyNode // 快慢指针
    // 快指针移动n步
    while (n-- > 0) {
        if (!fast) return // n大于链表长度，直接返回
        fast = fast.next
    }
    // 快慢指针一起移动
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummyNode.next
}