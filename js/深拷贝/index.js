function deepClone(target) {
    let obj
    // 处理引用类型
    if (typeof obj === 'object') {
        // 处理数组
        if (Array.isArray(target)) {
            obj = []
            for (const item of target) {
                obj.push(deepClone(item))
            }
        } else if (target == null) {
            obj = null
        } else { // 处理对象
            obj = {}
            for (const prop in target) {
                obj[prop] = deepClone(target[prop])
            }
        }
    }
    // 处理普通类型
    else {
        obj = target
    }
    return obj
}