// 一个包的版本由主版本号.次版本号.修订号-预发布版本号组成
// 其中预发布版本号次序为alpha(内测版)<beta(公测版)<rc(发布候选版)<正式版
// 1.0.0-alpha<1.0.0-beta<1.0.0-rc<1.0.0

function compare(v1, v2) {
  const order = { alpha: 1, beta: 2, rc: 3, "": 4 };
  function parse(v) {
    const [main, pre = ""] = v.split("-");
    const nums = main.split(".").map(Number);
    while (nums.length < 3) nums.push(0);
    return [nums,pre]
  }
  const [n1,p1]=parse(v1)
  const [n2,p2]=parse(v2)
  for(let i=0;i<3;i++){
    if(n1[i]>n2[i]) return 1
    if(n1[i]<n2[i]) return -1
  }
  if(order[p1]>order[p2]) return 1
  if(order[p1]<order[p2]) return -1
  return 0
}

console.log(compare('1.0.0', '1.0.0')); // 0
console.log(compare('1.0.1', '1.0.0')); // 1
console.log(compare('1.0.0-alpha', '1.0.0-beta')); // -1
console.log(compare('1.0.0-beta', '1.0.0-rc')); // -1
console.log(compare('1.0.0-rc', '1.0.0')); // -1
console.log(compare('1.0', '1.0.0')); // 0
console.log(compare('2.0', '1.0.0')); // 1