// 不传参
function debounce(fn: () => void, delay: number): () => void {
    let timer: null | ReturnType<typeof setTimeout> = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

// 传参
function debounce2<T extends any[]>(fn: (...args: T) => void, delay: number): (...args: T) => void {
    let timer: null | ReturnType<typeof setTimeout> = null
    return function (...args: T) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}