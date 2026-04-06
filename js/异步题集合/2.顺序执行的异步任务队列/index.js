class TaskQueue {
  constructor() {
    // 存储通过task()添加的任务
    this.queue = [];
  }
  task(delay, fn) {
    this.queue.push({ delay, fn });
    return this; // 返回this支持链式调用
  }
  async start() {
    for (const task of this.queue) {
      await new Promise((resolve) => setTimeout(resolve, task.delay));
      await task.fn();
    }
  }
}

new TaskQueue()
  .task(1000, () => console.log(1))
  .task(2000, () => console.log(2))
  .task(3000, () => console.log(3))
  .start();
// 1s后输出1，再过2s输出2，再过3s输出3
