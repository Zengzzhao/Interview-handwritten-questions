题目描述：

实现一个retryRequest(fn, maxAttempts, delay) 函数，其中maxAttempts为最大尝试次数，delay为每次重试前的等待时间（毫秒），若达到最大重试次数前成功则打印ok，否则打印fail

完善下面代码的retryRequest：

```js
function retryRequest(fn, maxAttempts = 3, delay = 1000) {
  
}

const fakeApi = () =>
  new Promise((res, rej) => (Math.random() < 0.5 ? res("ok") : rej("fail")));
retryRequest(fakeApi, 3, 1000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// 三次重试内成功则打印ok,否则打印fail
```

