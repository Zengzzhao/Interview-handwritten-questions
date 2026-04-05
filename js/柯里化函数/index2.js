// 情形2：函数参数固定，传递个数到达时就运行
// 如add(1,2,3)--->add(1)(2)(3)柯里化执行(只有三个参数)
function curry(fn) {
  let params = [];
  const curried = (...args) => {
    params = [...params, ...args];
    if (params.length >= fn.length) { // 参数个数已达到传递的函数所需参数个数
      const allParams = params; // 由于使用闭包保存每次传递的参数,所以本次调用完后要将其清楚避免参数累加
      params = [];
      return fn(...allParams); // 将收集到的所有参数传递到fn中运行
    }
    return curried;
  };
  return curried;
}

// 需要柯里化的函数
function add(a, b, c) {
  const sum = a + b + c;
  console.log(sum);
}
add(1, 2, 3);

// 柯里化后的add函数
const curryAdd = curry(add);
curryAdd(1)(2)(3);
curryAdd(1, 2)(3);
