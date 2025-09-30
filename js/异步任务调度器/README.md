题目描述：

JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善下面代码的Scheduler类，使以下程序能够正常输出：

```js
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}
   
const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})
  
const scheduler = new Scheduler();
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time)).then(()=>console.log(order))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// output: 2 3 1 4
```
