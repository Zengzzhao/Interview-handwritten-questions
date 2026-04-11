题目描述：

实现一个支持异步并发数量限制的LimitRequest类，任意时刻，同时执行的任务数不超过limit。当一个任务完成后，自动从队列中取出下一个任务执行

完善下面代码的LimitRequest类，使以下程序能够正常输出：

```js
class LimitRequest {
  constructor(limit) {}
  push(task) {}
}

const getData = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), 1000));
const limiter = new LimitRequest(2);
[1, 2, 3, 4, 5].forEach((i) => limiter.push({ fn: () => getData(i) }));
// 1s后输出1,2;
// 再过1s输出3,4;
// 再过1s输出5
```

