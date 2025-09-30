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
    result[result.length - 1] = '.'
    result += decimal
    return result
}

// console.log(splitNum('1234567.890'));
// console.log(splitNum('234567.890'));
// console.log(splitNum('34567.890'));

// 正则方法
function reNum(num){
    return num.replace(/\B(?=(\d{3})+(?!\d))/g,',')
}
console.log(reNum('1234567.890'));
console.log(reNum('234567.890'));
console.log(reNum('34567.890'));