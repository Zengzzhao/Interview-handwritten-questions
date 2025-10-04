var moveZeroes = function (nums) {
    // fast指针
    let fast = 0, slow = 0
    // 第一轮循环,向后遍历用后面的数将前面数覆盖
    // fast指向非零的数,slow指向当前被覆盖的位置
    while (fast < nums.length) {
        if (!nums[fast]) fast++ // 如果当前是0，向后移动
        else {
            nums[slow] = nums[fast]
            fast++
            slow++
        }
    }
    // 第二轮循环,此时slow指向的位置前面都是原顺序的非零数了，后面的数直接全部填0
    while (slow < nums.length) {
        nums[slow] = 0
        slow++
    }
}