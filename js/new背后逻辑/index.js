function myNew(constructor, ...args) {
    // 创建一个空对象，并将其链接到构造函数的原型上
    const obj = Object.create(constructor.prototype)
    // 运行构造函数得到返回值，并将构造函数内的this指向创建的对象
    const result = constructor.apply(obj, args)
    // 如果构造函数返回结果是Object则返回该对象，否则返回新对象
    return typeof result == 'object' ? result : obj
}