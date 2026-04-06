class LimitRequest {
  constructor(limit) {
    this.limit = limit;
    this.queue = []; // 存储待执行任务的数组
    this.count = 0; // 正在执行的任务数量
  }
  push(task) {
    this.queue.push(task);
    this.run();
  }
  run() {
    if (this.count >= this.limit || !this.queue.length) return;
    const task = this.queue.shift();
    this.count++;
    task
      .fn()
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        this.count--;
        this.run();
      });
  }
}

const getData = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), 1000));
const limiter = new LimitRequest(2);
[1, 2, 3, 4, 5].forEach((i) => limiter.push({ fn: () => getData(i) }));
// 1s后输出1,2;
// 再过1s输出3,4;
// 再过1s输出5
