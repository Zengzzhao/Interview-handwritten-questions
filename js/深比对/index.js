function deepEqual(a, b) {
    // 基本类型直接比较
    if (a === b) return true
    // 处理null/undefined/NaN 和 非对象类型
    if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') return false
    // 统一比较数组与对象(数组数组、对象对象、数组对象)
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    return keysA.length === keysB.length && keysA.every(key => deepEqual(a[key], b[key]))
}