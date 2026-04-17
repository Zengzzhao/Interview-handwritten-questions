var a = 11;
function test() {
  this.a = 22;
  let b = function () {
    console.log(this, this.a);
  };
  b();
}
new test();

// 打印结果
// 严格模式下
// undefined
// TypeError: Cannot read properties of undefined (reading 'a')
// 非严格模式下--浏览器
// window
// 11
// 非严格模式下--node
// global
// undefined

var a2 = 11;
function test2() {
  this.a2 = 22;
  let b2 = () => {
    console.log(this, this.a2);
  };
  b2();
}
new test2();

// 打印结果
// test2 { a2: 22 } 22