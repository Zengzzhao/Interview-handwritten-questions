var twoSum = function (nums, target) {
    const map = new Map() // 存储数-index的映射
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i] // 当前的数
        const needNum = target - curNum // 当前数需要的数，以凑成target
        if (map.has(needNum)) {
            return [i, map.get(needNum)]
        }
        map.set(curNum, i)
    }
}