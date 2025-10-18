var lengthOfLIS = function (nums) {
    // dp[i]表示以第i-1个数nums[i]结尾时的最长递增子序列的长度
    const dp = new Array(nums.length).fill(1)
    // 初始化
    dp[0] = 1
    // 遍历
    for (let i = 1; i < nums.length; i++) {
        // 从当前数的前一个数开始看，如果当前数大于前一个数则当前数可以可以添加到以前一个数结尾的递增序列中，此时更新以当前数结尾时最初递增子序列长度为原来值、前一个数结尾的最长递增自学列长度+1中大的一个
        for (let j = i - 1; j >= 0; j--) {
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1)
            }
        }
    }
    return Math.max(...dp)
}