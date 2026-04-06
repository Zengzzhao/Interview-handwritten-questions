题目描述：

实现一个支持顺序执行的异步任务队列TaskQueue，可以通过链式调用添加任务，调用 start()后，任务按照顺序依次执行，每个任务在执行前需要等待指定时间。

完善下面代码的TaskQueue类，使以下程序能够正常输出：

```js
class TaskQueue{
  
}

new TaskQueue()
  .task(1000, () => console.log(1))
  .task(2000, () => console.log(2))
  .task(3000, () => console.log(3))
  .start();
// 1s后输出1，再过2s输出2，再过3s输出3
```

