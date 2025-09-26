// 不传参
function throttle(fn: () => void, delay: number): () => void {
    let timer: null | ReturnType<typeof setTimeout> = null
    return function () {
        if (!timer) {
            fn()
            timer = setTimeout(() => {
                timer = null
            }, delay)
        }
    }
}

// 传参
function throttle2<T extends any[]>(fn: (...args: T) => void, delay: number): (...args: T) => void {
    let timer: null | ReturnType<typeof setTimeout> = null
    return function (...args: T) {
        if (!timer) {
            fn(...args)
            timer = setTimeout(() => {
                timer = null
            }, delay)
        }
    }
}