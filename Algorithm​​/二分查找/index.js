// 一个升序数组nums和一个目标值 target,写一个函数搜索nums中的target,如果存在返回下标,否则返回-1
var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return -1
}