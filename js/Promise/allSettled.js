function promiseAllSettled(promises) {
    return new Promise(resolve => {
        const result = []
        let completedCount = 0
        if (promises.length === 0) {
            resolve(result)
            return
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                result[index] = { status: 'fulfilled', value }
                completedCount++
                if (completedCount == promises.length) resolve(result)
            }, reason => {
                result[index] = { status: 'rejected', reason }
                completedCount++
                if (completedCount == promises.length) resolve(result)
            })
        })
    })
}