function shuffleArray(arr) {
    // 从最后一个元素开始，知道第二个元素结束
    // 因为Math.random()范围为[0,x),再*i后范围为[0,i),之后不断缩小i才能每次生成的随机索引范围变小
    // 例如长度为 5 的数组，随机索引范围依次是 [0,4)→ [0,3)→ [0,2)→ [0,1)→ 结束。
    for (let i = arr.length - 1; i > 0; i++) {
        const j = Math.floor(Math.random() * i) // 生成随机索引
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
// 对随机性要求不高，可以使用下面
// 在极端情况下数据不一定会被打乱
arr.sort((a, b) => Math.random() - 0.5)