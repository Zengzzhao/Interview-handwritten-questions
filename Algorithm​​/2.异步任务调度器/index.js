class Scheduler {
    constructor() {
        this.count = 0 // 当前在并发调度器中的异步任务数量
        this.queue = new Array() // 当并发调度器满了时，缓存此时加入调度器中的异步任务
    }
    async add(promiseCreator) {
        // count>=2时，将任务缓存起来
        if (this.count >= 2) {
            // 通过new Promise创建一个微任务等待，前面await没有resolve()是不会往下执行的
            await new Promise(resolve => {
                this.queue.push(resolve)
            })
        }
        // 缓存队列queue中某一项resolve()后会从这往下走
        this.count++
        await promiseCreator() // 执行timeout(time),等待其执行完才会执行后续代码，将后续代码放入微队列中
        this.count--
        if (this.queue.length) {
            this.queue.shift()() // 从缓存队列中取出第一项并执行resolve()
        }
    }
}

const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new Scheduler();

const addTask = (time, order) => {
    // scheduler.add中传递了一个函数，这个函数运行返回一个promise
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// output: 2 3 1 4