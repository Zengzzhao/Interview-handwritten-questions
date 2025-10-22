function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        const erros = []
        let completeCount = 0
        if (promises.length === 0) {
            reject(new AggregateError([], 'All promises were rejected'))
            return
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                resolve(value)
            }, err => {
                erros[index] = err
                completeCount++
                if (completeCount === promises.length) reject(new AggregateError(erros, 'All promises were rejected'))
            })
        })
    })
}