// 数组A中给定可以使用的1~9的数，返回由A数组中的元素组成的小于n的最大数。
// 例如A={1, 2, 4, 9}，x=2533，返回2499
let A = [1, 2, 4, 9];
let x = 2533;

// 暴力解法:从最大数开始遍历至0,看该数的各个位数是否在数组中,若在则就是我们要找到最大数
// for (let i = x-1; i >= 0; i--) {
//     let nums=String(i).split("")
//     let flag=true
//     for(let num of nums){
//         if(!(A.includes(Number(num)))){
//             flag=false
//             break
//         }
//     }
//     if(flag){
//         console.log(i);
//         break
//     }
// }

// 思想：从给定的x的最高位开始，从A中取出不大于x的当前位且是A中最大的数，从次高位判断当前一位已经小于x同样位时则表明该数已经小于x了，之后位数直接取A中的最大即可
x = x - 1
const nums = String(x).split("")
let target = []
let maxFlag = false
for (let index1 = 0; index1 < nums.length; index1++) {
    let curNum = A[0]
    // 前面一位小于目标，则后面完全可以取A中最大
    if (index1 != 0 && target[index1 - 1] < nums[index1 - 1]) break
    for (let index2 = 1; index2 < A.length; index2++) {
        if (A[index2] > curNum && A[index2] <= nums[index1]) {
            curNum = A[index2]
        }
    }
    target.push(curNum)
}
if (target.length != A.length) {
    const max = Math.max.apply(null, A)
    const count = A.length - target.length
    for (let i = 1; i <= count; i++) {
        target.push(max)
    }
}
let result = target.join("")
console.log(result);
