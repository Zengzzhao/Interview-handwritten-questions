function myInstanceof(obj, constructor) {
    let proto = Object.getPrototypeOf(obj)  // 获取obj的原型，即obj.__proto
    while (proto !== null) { // 沿着原型链往上走只要没到顶到达null
        if (proto === constructor.prototype) return true // 如果当前构造函数的原型在当前对象的原型链上，返回true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

// 测试
class A { }
class B extends A { }
class C extends B { }
const c = new C()
console.log(myInstanceof(c, A));
