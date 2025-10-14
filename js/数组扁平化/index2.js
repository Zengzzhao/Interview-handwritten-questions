// 不使用递归，使用栈实现
const arr = [1, 2, [4, 3, [5]]]
function flatArr(arr) {
    const result = [] // 存放结果的数组
    const stack = arr.reverse() // 将数组反转入栈，确保出栈顺序同数组索引顺序
    while (stack.length) {
        const cur = stack.pop()
        // 当前元素是数组，将数组每个元素放入栈中继续处理
        if (Array.isArray(cur)) {
            // 嵌套子数组也反转入栈，确保顺序
            for (let i = cur.length - 1; i >= 0; i--) {
                stack.push(cur[i])
            }
        }
        // 当前元素就是基本数据，直接放入最终结果中
        else {
            result.push(cur)
        }
    }
    return result
}
console.log(flatArr(arr));

