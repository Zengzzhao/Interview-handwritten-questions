var wordBreak = function (s, wordDict) {
    const set = new Set(wordDict)
    // dp[i]表示s中前i个字符组成的字符串是否可以用字典拼接得到
    const dp = new Array(s.length + 1).fill(false)
    // 初始化
    dp[0] = true
    // 遍历
    for (let i = 1; i <= s.length; i++) {
        // 从当前字符前一个位置j开始，看当前字符是否在字典中，并且前面的字符串也可以用字典拼接得到
        for (let j = i - 1; j >= 0; j--) {
            const lastStr = s.slice(j, i)
            if (set.has(lastStr) && dp[j]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
}