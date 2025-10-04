var longestConsecutive = function (nums) {
    const set = new Set(nums)
    let result = 0
    for (const num of set) {
        const preNum = num - 1
        if (set.has(preNum)) continue // 当前数不是nums中某个序列的第一个数，跳过
        // 当前数不是nums中某个序列的第一个数
        let curLen = 1
        let next = num + 1
        while (set.has(next)) {
            next++
            curLen++
        }
        result = result > curLen ? result : curLen
    }
    return result
}