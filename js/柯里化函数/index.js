// 情形1：函数参数不定,没有传递参数时就是运行
// 如add(1,2,3)--->add(1)(2)(3)()柯里化执行(不一定是3个参数,可以1、2、4...)


function curry(fn) {
    let params = []
    const curried = (...args) => {
        if (args.length <= 0) { // 没有传递参数,直接通过()调用
            const allParams = params // 由于使用闭包保存每次传递的参数,所以本次调用完后要将其清楚避免参数累加
            params = []
            return fn(...allParams) // 将收集到的所有参数传递到fn中运行
        }
        // 传递了参数,将参数收集后再返回curried函数本身
        params = [...params, ...args]
        return curried
    }
    return curried
}

// 需要柯里化的函数
function add(...args) {
    const result = args.reduce((pre, cur) => pre + cur, 0)
    console.log(result);
}
add(1, 2, 3, 4, 5)

// 柯里化后的add函数
const curryAdd = curry(add)
curryAdd(1)(2)(3)(4)(5)()
curryAdd(1)(2)(3)(4)(5)()