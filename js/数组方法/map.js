// 使用reduce实现map
Array.prototype.myMap = function (fn) {
  const arr1 = this.reduce((acc, cur, index, arr) => {
    acc.push(fn(cur, index, arr));
    return acc;
  }, []);
  return arr1;
};

// 测试
const arr = [1, 2, 3];
const arr1 = arr.myMap((cur, index, arr) => {
  console.log(cur, index, arr);
  return cur + 1;
});
console.log(arr1);
