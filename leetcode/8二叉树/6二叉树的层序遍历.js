var levelOrder = function (root) {
    const result = [] // 最终结果
    const queue = [] // 存放还访问的节点数组
    if (root) queue.push(root);
    // 还有没有访问过的就一直访问呢
    while (queue.length) {
        const len = queue.length
        const curLevel = [] // 存储本层所有节点
        for (let i = 0; i < len; i++) {
            // 当前节点访问过了，将其拿出
            const curNode = queue.shift()
            curLevel.push(curNode.val)
            // 将当前访问了的节点的左右节点放入待访问队列中
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        result.push(curLevel)
    }
    return result
}