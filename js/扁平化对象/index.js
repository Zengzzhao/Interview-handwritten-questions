const obj = {
    a: 1,
    b: {
        c: 2,
        d: { e: 3 }
    },
    f: [4, 5, { g: 6 }]
};

function flat(obj, prefix = '', result = {}) {
    for (const key in obj) {
        const value = obj[key] // 当前属性值
        // 如果当前对象为数组则将其新的key变为prefix[key],如果是对象则将其新的key变为prefix.key,否则如果是普通数据类型就用key
        const newKey = Array.isArray(obj) ? `${prefix}[${key}]` : prefix ? `${prefix}.${key}` : key
        // 如果当前属性值为对象类型，则递归flat
        if (typeof value === 'object' && value != null) {
            flat(value, newKey, result)
        }
        // 如果当前属性值为基本数据类型，直接赋值给result
        else {
            result[newKey] = value
        }
    }
    return result
}

console.log(flat(obj));