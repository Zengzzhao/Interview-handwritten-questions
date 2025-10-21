// 调用为const fn1=fn.myBind(obj,arg1,arg2);
// fn1(arg3,arg4)

// context为要绑定的this,...args为调用myBind时传递所绑定的参数
Function.prototype.myBind = function (context, ...args) {
    const fn = this
    // ...newArgs为调用当前返回的绑定了this与参数后的函数时所传递的参数
    return function (...newArgs) {
        // 将fn所有参数拼接后运行
        return fn.apply(context, args.concat(newArgs))
    }
}

function greet(msg1, msg2, msg3, msg4) {
    console.log(this.name, msg1, msg2, msg3, msg4);
}
const obj = {
    name: 'zzz'
}
const bindGreet = greet.myBind(obj, 1, 2)
bindGreet(3, 4)