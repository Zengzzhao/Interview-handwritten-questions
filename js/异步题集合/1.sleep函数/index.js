// 实现sleep,使程序可以等待指定毫秒数后再继续执行
function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

console.log(1);
await sleep(1000);
console.log(2);
