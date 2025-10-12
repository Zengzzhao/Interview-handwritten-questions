// 将下面的代码转换为普通构造函数的写法
class Exmaple {
    constructor(name) {
        this.name = name
    }
    func() {
        console.log(this.name);
    }
}

// 注意点
// 1. ES6代码都是在严格模式下的
// 2. 不通过new调用类，直接调用类会报TypeError: Class constructor Exmaple cannot be invoked without 'new'
// 3. 类上的方法是不可枚举的
// 4. 类上的方法不可以new，new调用汇报TypeError: xxx is not a constructor


// 标准写法
"use strict";
function myExmaple(name) {
    // 如果不通过new调用类，直接调用类会报TypeError: Class constructor Exmaple cannot be invoked without 'new'
    if (!new.target) {
        throw new TypeError("Class constructor Exmaple cannot be invoked without 'new'")
    }
    this.name = name
}
// 类上的方法是不可枚举的,也不可以new，new调用汇报TypeError: xxx is not a constructor
Object.defineProperty(myExmaple.prototype, 'func', {
    value: function () {
        if(new.target){
            throw TypeError('myExmaple.prototype.func is not a constructor')
        }
        console.log(this.name);
    },
    enumerable: false
})