function deepClone(target) {
    let obj
    // 处理引用类型
    if (typeof target === 'object' && target !== null) {
        obj = Array.isArray(target) ? [] : {}
        for (const key in target) {
            obj[key] = deepClone(target[key])
        }
    }
    // 处理基本数据类型、null
    else {
        obj = target
    }
    return obj
}

// 浅拷贝
function shallowClone(target) {
    let obj
    // 引用数据类型
    if (typeof target === 'object' && target != null) {
        obj = Array.isArray(target) ? [] : {}
        for (const key in target) {
            obj[key] = target[key]
        }
    }
    // 普通数据类型、null
    else {
        obj = target
    }
    return obj
}