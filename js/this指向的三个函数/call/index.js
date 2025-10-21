// 调用为fn.myCall(obj,arg1,arg2)
// context为给fn绑定的this,...args为要传递给fn的参数
Function.prototype.myCall = function (context, ...args) {
    const fnSymbol = Symbol() // 创建一个唯一键，避免属性名冲突
    context[fnSymbol] = this // 给绑定的this对象添加属性，赋值为当前调用myCall的函数
    const result = context[fnSymbol](...args) // 运行函数得到结果
    delete context[fnSymbol] // 将绑定的this对象上添加的属性删除
    return result // 返回结果
}

function greet(message) {
    console.log(this.name, message);
}
const obj = {
    name: 'zzz'
}
greet.myCall(obj,'你好')