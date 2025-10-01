function deepEqual(a, b) {
    // 基本类型直接比较
    if (a === b) return true
    // 处理null/undefined/NaN
    if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') return false
    // 比较数组
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.length === b.length && a.every((val, index) => deepEqual(val, b[index]))
    }
    // 比较对象
    const keysA = a.keys()
    const keysB = b.keys()
    return keysA.length === keysB.length && keysA.every(key => deepEqual(a[key], b[key]))
}