// 找到第n个丑数
// 以下为暴力解法
function getUglyArr(n) {
    const uglyNumArr = []
    let num = 1
    while (uglyNumArr.length < n) {
        if (isUgly(num)) {
            uglyNumArr.push(num)
        }
        num++
    }
    return uglyNumArr[n - 1]
}
function isUgly(num) {
    if (num <= 0) return false
    const factors = [2, 3, 5]
    for (const factor of factors) {
        while (num % factor === 0) {
            num = num / factor
        }
    }
    return num === 1
}
console.log(getUglyArr(10));

// 动态规划解法
function nthUglyNumber(n) {
    // dp[i]表示第i+1个丑数
    const dp = []
    // 初始化
    dp[0] = 1
    let p2 = 0, p3 = 0, p5 = 0 // 三个指针，分别指向一个dp中的丑数，下一个可能的丑数是当前指针指向的丑数*2/3/5得到
    // 遍历
    for (let i = 1; i < n; i++) {
        // 计算下一个丑数
        let next2 = dp[p2] * 2 // *2指针指向的丑数对应的下一个丑数
        let next3 = dp[p3] * 3 // *3指针指向的丑数对应的下一个丑数
        let next5 = dp[p5] * 5 // *5指针指向的丑数对应的下一个丑数
        const next = Math.min(next2, next3, next5) // 下一个丑数
        dp[i] = next
        // 指针移动
        if (next === next2) p2++
        if (next === next3) p3++
        if (next === next5) p5++
    }
    return dp[n - 1]
}