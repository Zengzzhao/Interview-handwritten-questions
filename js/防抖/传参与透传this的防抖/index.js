// 传参与透传this的防抖
export function debounce(fn, delay) {
    let timer = null
    // 返回去的函数就是经过防抖处理后的函数，其中的剩余参数args就是调用防抖处理后的函数时传递的参数
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            // 如果业务函数fn是纯函数(完全不使用this),那么可以直接fn(...args)
            // 或者fn已经通过bind显式绑定this后得到的新函数,那么也可以直接fn(...args)
            fn.apply(this, args)
        }, delay)
    }
}
