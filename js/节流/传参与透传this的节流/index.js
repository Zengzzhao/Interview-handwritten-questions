export function throttle(fn, delay) {
    let timer = null
    return function (...args) {
        if (!timer) {
            fn.apply(this, args)
            timer = setTimeout(() => {
                timer = null
            }, delay)
        }
    }
}