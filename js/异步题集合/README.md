# 基本结构

**顺序一个接一个执行，无并发数量限制**

```js
class TaskQueue{
  constructor(){
    this.queue=[] // 存储当前所有需要执行的任务的队列
  }
}
```

**并发执行，有并发数量限制**

```js
class TaskQueue{
  constructor(limit){
    this.limit=limit; // 最大正在执行任务数
    this.count=0; // 正在执行的任务数
    this.queue=[] // 存储在等待中任务的resolve，用于唤醒等待中的任务
  }
}
```



# 常用结构

等待task.delay时间后在执行task.fn

```js
await new Promise((resolve) => setTimeout(resolve, task.delay));
task.fn()
```



# 并发

n个任务同时运行：将执行逻辑放在同步代码中（await前），后处理放在异步回调（await后）

```js
class Queue{
  run(fn){
    count++
    const res=await fn()
    console.log(res)
    count--
  }
}
```

并发最大个数限制：在执行前判断数量是否达到限制，若达到将任务的resolve保存同时使用await卡住后续操作，等有任务执行完成是再取出一个resolve

如何确保一个需要等待n秒的任务在达到并发限制后，直到可以执行时等待n秒执行完成的时间是正确的？（等待放入队列+进入队列等待n秒执行的时间）：等待放入队列利用微任务将计时器放入微任务队列，进入队列等待n秒执行取出该微任务并将计时器放入宏任务（等待放入队列时间：微任务保证；进入队列等待n秒执行的时间：微任务取出后放入的宏任务保证）
