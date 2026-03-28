/**
 * 1234567.890 => 1,234,567.890
 */
function splitNum(num) {
    const [interger, decimal] = num.split('.')
    let result = ''
    let curResult = ''
    let count = 0
    for (let i = interger.length - 1; i >= 0; i--) {
        count++
        curResult += interger[i]
        if (count >= 3) { // 三位已满开始分隔
            curResult = curResult.split('').reverse().join('')
            result = curResult + ',' + result
            curResult = ''
            count = 0
        }
    }
    if (curResult) {
        curResult = curResult.split('').reverse().join('')
        result = curResult + ',' + result
    }
    result = result.replace(/,$/, '.')
    result += decimal
    return result
}

// console.log(splitNum('1234567.890'));
// console.log(splitNum('234567.890'));
// console.log(splitNum('34567.890'));

// 正则方法
function reNum(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
// 解释：
// 字符串中每两个字符之间存在一个间隙,正则会在这些间隙上测试该表达式
// |1|2|3|4|5|6|7|.|8|9|0|,其中|表示一个潜在的插入位置
// \B表示非单词边界,即这个位置左右两侧都是字母/数字/_下划线,或者左右两侧都不是字母/数字/_下划线,且不是字符串开头结尾
// 所以只剩下 1|2|3|4|5|6|7.8|9|0 这几个|位置
// (?=(\d{3}))+正向前瞻，表示当前位置后面的内容开头部分是一组或多组三位数字
// 所以只剩下 1|2|3|4|567.890 这几个|位置
// (?!\d)负向前瞻，表示匹配到3的倍数位数的数字后面必须不是数字开头
// 所以只剩下 1|234|567.890 这几个|位置
// 于是 1,234,567.890
console.log(reNum('1234567.890'));
console.log(reNum('234567.890'));
console.log(reNum('34567.890'));