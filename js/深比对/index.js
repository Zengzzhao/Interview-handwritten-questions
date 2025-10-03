function deepEqual(a, b) {
    // 基本类型比较，如果a,b都是基本类型且相等则返回true
    if (a === b) return true
    // 否则说明a,b都是基本类型但值不相等 或 a,b不都是基本类型是引用object类型
    // 对于a,b都是基本类型但值不相等的情况直接返回false
    if (typeof a !== 'object' || typeof b !== 'object') return false
    // 对于a,b不都是基本类型是引用object类型，统一比较数组与对象(数组数组、对象对象、数组对象)
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    return keysA.length === keysB.length && keysA.every(key => deepEqual(a[key], b[key]))
}