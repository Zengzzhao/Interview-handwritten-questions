console.log(1);
setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    })
}, 1000);
function promise() {
    return new Promise((resolve, reject) => {
        console.log(4);
        resolve();
    }).then(() => {
        console.log(12);
    }).then(() => {
        throw new Error('123');
    })
}
promise().then(() => {
    console.log(9);
})
async function func() {
    console.log(8);
}
func();
console.log(11);

// 打印结果
// 1
// 4
// 8
// 11
// 12
// Error('123');
// 2
// 3


// console.log(1);
// setTimeout(() => {
//     console.log(2);
//     Promise.resolve().then(() => {
//         console.log(3);
//     })
// }, 1000);
// function promise() {
//     return new Promise((resolve, reject) => {
//         console.log(4);
//         resolve();
//     }).then(() => {
//         console.log(12); 没有reject或者throw,自动resolve
//     }).then(() => {
//         throw new Error('123');
//     })
// }
// 先运行promise()函数,同步执行打印4以及resolve,然后将后续.then放入微队列
// 打印9的需要等promise()函数执行完并resolve后放入微任务队列,但是这里promise()函数执行后throw所以不会进入打印9的.then
// promise().then(() => {
//     console.log(9);
// })
// async function func() {
//     console.log(8);
// }
// func();
// console.log(11);