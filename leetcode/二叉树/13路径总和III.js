var pathSum = function (root, targetSum) {
    let result = 0
    const map = new Map() // 记录前缀和-该前缀和出现次数的映射
    map.set(0, 1)
    // node为当前访问的节点,curSum为该节点上面前缀和
    function preOrder(node, curSum) {
        if (!node) return
        curSum += node.val // 当前节点前缀和
        const need = curSum - targetSum // 需要的前缀和
        // 查看map中是否有需要的前缀和，若有则累加到result中
        if (map.has(need)) {
            const count = map.get(need)
            result += count
        }
        // 将当前节点的前缀和加入到map中
        if (map.has(curSum)) {
            let count = map.get(curSum)
            count++
            map.set(curSum, count)
        } else {
            map.set(curSum, 1)
        }
        // 递归访问左右节点
        preOrder(node.left, curSum)
        preOrder(node.right, curSum)
        // 当前节点已经访问完需要返回到父节点，将当前节点的前缀和从map中移除，以免影响到后续节点的判断
        if (map.has(curSum)) {
            let count = map.get(curSum)
            count--
            map.set(curSum, count)
        }
    }
    preOrder(root, 0)
    return result
}