var lowestCommonAncestor = function (root, p, q) {
    // map记录当前节点与其父节点的映射
    const map = new Map()
    // 遍历二叉树，记录map
    function dfs(node, parent) {
        if (!node) return
        map.set(node, parent)
        dfs(node.left, node)
        dfs(node.right, node)
    }
    dfs(root, null)
    // 当前所访问的节点
    let curNode = p
    // 存储p及其父节点的集合
    const set = new Set()
    while (curNode) {
        set.add(curNode)
        curNode = map.get(curNode)
    }
    // 遍历q及其父节点,判断此节点是否出现在p及其父节点的集合中
    curNode = q
    while (curNode) {
        if (set.has(curNode)) return curNode
        curNode = map.get(curNode)
    }
}