function retryRequest(fn, maxAttempts = 3, delay = 1000) {
  let attempts = 0;
  return new Promise((resolve, reject) => {
    function request() {
      attempts++;
      fn()
        .then((res) => resolve(res))
        .catch((err) => {
          if (attempts >= maxAttempts) reject(err);
          else setTimeout(request, delay);
        });
    }
    request();
  });
}

const fakeApi = () =>
  new Promise((res, rej) => (Math.random() < 0.5 ? res("ok") : rej("fail")));
retryRequest(fakeApi, 3, 1000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// 三次重试内成功则打印ok,否则打印fail
