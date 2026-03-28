// 双向链表节点
class Node {
  constructor(key, value) {
    this.key = key; // 键
    this.value = value; // 值
    this.prev = null; // 前驱指针
    this.next = null; // 后继指针
  }
}

// LRU 缓存类
// 哈希表map实现O(1)查找,双向链表实现O(1)删除,两者都只存放缓存中的内容(双向链表相比于单链表,删除节点时无需遍历链表找到其前驱)
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // 缓存容量
    this.map = new Map(); // 哈希表：存键到节点的映射
    this.head = new Node(); // 虚拟头节点（方便操作）
    this.tail = new Node(); // 虚拟尾节点
    this.head.next = this.tail; // 头连到尾
    this.tail.prev = this.head; // 尾连到头
  }

  // 获取值
  get(key) {
    if (!this.map.has(key)) return -1; // 不存在返回-1
    const node = this.map.get(key);
    this.moveToHead(node); // 移到头部（标记为最近使用）
    return node.value;
  }

  // 插入或更新值
  put(key, value) {
    if (this.map.has(key)) {
      // 已存在：更新值并移动
      const node = this.map.get(key);
      node.value = value;
      this.moveToHead(node);
    } else {
      // 不存在：创建新节点
      const newNode = new Node(key, value);
      this.map.set(key, newNode); // 存入哈希表
      this.addToHead(newNode); // 添加到链表头部
      if (this.map.size > this.capacity) {
        // 超出容量：删除尾部节点
        const removed = this.removeTail();
        this.map.delete(removed.key);
      }
    }
  }

  // 辅助方法：将节点移到头部
  moveToHead(node) {
    this.removeNode(node); // 先断开节点
    this.addToHead(node); // 再插到头部
  }

  // 辅助方法：将节点添加到头部
  addToHead(node) {
    node.prev = this.head; // 新节点前驱指向头
    node.next = this.head.next; // 新节点后继指向原第一个节点
    this.head.next.prev = node; // 原第一个节点的前驱指向新节点
    this.head.next = node; // 头的后继指向新节点
  }

  // 辅助方法：删除节点
  removeNode(node) {
    node.prev.next = node.next; // 前驱的后继跳过自己
    node.next.prev = node.prev; // 后继的前驱跳过自己
  }

  // 辅助方法：删除尾部节点（最久未使用）
  removeTail() {
    const node = this.tail.prev; // 找到真实尾节点
    this.removeNode(node);
    return node;
  }
}
