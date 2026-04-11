class LimitRequest {
  constructor(limit) {
    this.limit = limit;
    this.count = 0; // 正在执行的任务数量
    this.queue = []; // 存储在等待中任务的resolve，用于唤醒等待中的任务
  }
  async push(task) {
    if (this.count >= this.limit) {
      await new Promise((resolve) => {
        this.queue.push(resolve);
      });
    }
    this.count++;
    const res = await task.fn();
    console.log(res);
    this.count--;
    if (this.queue.length) {
      this.queue.shift()();
    }
  }
}

const getData = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), 1000));
const limiter = new LimitRequest(2);
[1, 2, 3, 4, 5].forEach((i) => limiter.push({ fn: () => getData(i) }));
// 1s后输出1,2;
// 再过1s输出3,4;
// 再过1s输出5
