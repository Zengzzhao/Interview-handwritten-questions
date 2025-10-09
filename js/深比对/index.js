function deepEqual(a, b) {
    // a/b不是对象，直接返回比较结果
    if (typeof a !== 'object' || typeof b !== 'object') return a === b
    // a,b都是对象，且地址相同返回true
    if (a === b) return true
    // a,b都是对象，但地址不同，递归比较每个值是否相同
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    return keysA.length === keysB.length && keysA.every(key => deepEqual(a[key], b[key]))
}
