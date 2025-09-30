// 丑数就是从1开始乘以2,3,5得到的数再乘2,3,5，依此类推得到的所有数都是丑数
// 判断一个数是否是丑数
var isUgly = function (n) {
    if (n <= 0) return false
    const factors = [2, 3, 5]
    for (const factor of factors) {
        while (n % factor === 0) {
            n = n / factor
        }
    }
    return n === 1
}