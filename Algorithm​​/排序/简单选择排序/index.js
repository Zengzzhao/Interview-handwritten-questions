const arr = [1, 2, 3, 4, 5]
arr.sort((a, b) => Math.random() - 0.5)
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    let minPos = i
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minPos]) {
            minPos = j
        }
    }
    if (minPos !== i) {
        [arr[i], arr[minPos]] = [arr[minPos], arr[i]]
    }
}
console.log(arr);
