const arr = [1, 2, 3, 4, 5]
arr.sort((a, b) => Math.random() - 0.5)
console.log(arr);

// i控制趟数
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}
console.log(arr);
