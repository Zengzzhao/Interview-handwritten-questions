for (var i = 0; i < 4; i++) {
    console.log(i);
}
// 0 1 2 3

for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}
// 4 4 4 4
// var是全局作用域,将setTimeout回调放入宏任务队列中后,回调捕捉的是全局作用域中的i,此时已经变为4了

// 要实现顺序输出0,1,2,3
// 方法1:使用lei块级作用域
for (let i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}
// 0 1 2 3
// let是块级作用域,将setTimeout回调放入宏任务队列中后,回调捕捉的是当前循环块级作用域中的i

// 方法2:使用立即执行函数
for (var i = 0; i < 4; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, 0)
    })(i)
}
// 0 1 2 3
// 立即执行函数每次循环会创建一个新的函数作用域,捕获当前的i

// 方法3:通过bind绑定参数
for (var i = 0; i < 4; i++) {
    setTimeout(function (i) {
        console.log(i);
    }.bind(null, i), 0)
}
// 0 1 2 3
// bind会创建一个新函数,并将参数预先绑定