export function throttle(fn, delay) {
    let timer = null
    return function () {
        if (!timer) {
            fn()
            timer = setTimeout(() => {
                timer = null
            }, delay)
        }
    }
}