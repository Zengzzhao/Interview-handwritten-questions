// 实现timeSlice函数,将大量任务按时间片分批执行,避免阻塞主线程
function timeSlice(tasks, handler, timeRemaining = 8) {
  let index = 0; // 利用闭包记录当前已执行完的任务id
  function run() {
    const start = performance.now();
    // 时间片未到
    while (index < tasks.length && performance.now() - start < timeRemaining) {
      handler(tasks[index], index);
      index++;
    }
    // 任务还没全部做完,放入宏任务队列中后续执行
    if (index < tasks.length) {
      setTimeout(run, 0);
    }
  }
  run();
}

const tasks = Array.from({ length: 10000 }, (_, i) => i)
timeSlice(tasks, (task, index) => {
    console.log(`执行第 ${index} 个任务，值为 ${task}`)
})
