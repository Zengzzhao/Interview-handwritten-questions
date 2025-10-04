var lengthOfLongestSubstring = function (s) {
    const chatSet = new Set() // 存储当前窗口内的字符
    let maxLen = 0, left = 0
    for (let right = 0; right < s.length; right++) {
        const curChar = s[right]
        while (chatSet.has(curChar)) { // 如果当前右指针指向的字符在窗口中已经出现过了，则将左侧向右移动
            chatSet.delete(s[left])
            left++
        }
        chatSet.add(curChar)
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}