var findAnagrams = function (s, p) {
    const result = []
    if (s.length < p.length) return result

    const pCount = new Array(26).fill(0) // 记录p中字符出现次数
    const sCount = new Array(26).fill(0) // 记录s中当前滑动窗口内的字符出现次数
    const aCharCode = 'a'.charCodeAt()

    // 统计p的字符出现次数
    for (let i = 0; i < p.length; i++) {
        pCount[p[i].charCodeAt() - aCharCode]++
    }
    // 滑动窗口遍历s,i为当前窗口的右边界指针
    for (let i = 0; i < s.length; i++) {
        sCount[s[i].charCodeAt() - aCharCode]++
        if (i >= p.length) { // 此时窗口大小超过p的长度,收缩窗口左边界
            // left为当前窗口的左边界指针前一个，即将要离开当前窗口的指针位置
            const left = i - p.length
            sCount[s[left].charCodeAt() - aCharCode]--
        }
        // 比较当前窗口内的字符与p中字符是否一样
        if (isEqual(sCount, pCount)) result.push(i - p.length + 1)
    }
    return result
};
// 辅助函数比较两个数组是否相等
function isEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}