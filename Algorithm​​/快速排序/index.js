const arr = [1, 2, 3, 4, 5]
arr.sort((a, b) => Math.random() - 0.5)
console.log(arr);

function huafen(arr, left, right) {
    const mid = arr[left]
    while (left < right) {
        while (arr[right] >= mid && left < right) right--
        arr[left] = arr[right]
        while (arr[left] <= mid && left < right) left++
        arr[right] = arr[left]
    }
    arr[left] = mid
    return left
}
function quickSort(arr, left, right) {
    if (left >= right) return
    const mid = huafen(arr, left, right)
    quickSort(arr, left, mid - 1)
    quickSort(arr, mid + 1, right)
}
quickSort(arr,0,arr.length-1)
console.log(arr);