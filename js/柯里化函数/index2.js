// 情形2：函数参数固定，传递个数到达时就运行
// 如add(1,2,3)--->add(1)(2)(3)柯里化执行(只有三个参数)
function curry(fn) {
    return function curried(...args) {
        // 当前传递的参数个数已经达到了fn要求的个数,直接运行fn
        if (fn.length <= args.length) {
            return fn(...args)
        }
        // 当前传递的参数个数还没有达到fn要求的个数,继续收集
        return function (...rest) {
            return curried(...args, ...rest)
        }
    }
}

// 需要柯里化的函数
function add(a, b, c) {
    const sum = a + b + c
    console.log(sum);
}
add(1, 2, 3)

// 柯里化后的add函数
const curryAdd = curry(add)
curryAdd(1)(2)(3)
curryAdd(1, 2)(3)