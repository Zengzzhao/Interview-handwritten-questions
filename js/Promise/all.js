// 传入的promises是一个promise数组，每个元素promise可以直接通过.then/.catch进行后续操作
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = []
        let completedCount = 0
        if (promises.length === 0) {
            resolve(results)
            return
        }
        promises.forEach((promise, index) => {
            // 可以直接promise.then((xxx),(xxx))进行处理，但是为了统一处理非promise值，使用Promise.resolve转换为Promise对象
            // Promsie.resolve中传递的是普通值时，Promsie.resolve(1)等价于Promise.resolve(Promise.resolve(1))
            // Promsie.resolve中传递的是Promise对象时，不会创建新的Promise，而是直接返回原promise
            Promise.resolve(promise).then(value => {
                results[index] = value
                completedCount++
                if (completedCount === promise.length) {
                    // promise数组中的promise全部已完成，直接调用最上层new Promise时的resolve变为完成
                    resolve(results)
                }
            },
                // promise数组中有一个rejected失败，直接调用最上层new Promise时的reject变为失败
                err => reject(err))
        })
    })
}