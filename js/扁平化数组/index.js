const arr = [1, 2, [4, 3, [5]]]
function flatArr(arr) {
    const result = []
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            const numArr = flatArr(ele)
            result.push(...numArr)
        } else {
            result.push(ele)
        }
    }
    return result
}
console.log(flatArr(arr));

