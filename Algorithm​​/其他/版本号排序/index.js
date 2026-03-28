// 版本号排序
// ['0.1.1', '2.3.3', '0.3002.1', '4.2', '4.3.5', '4.3.4']从小到大排序版本
const version = ["0.1.1", "2.3.3", "0.3002.1", "4.2", "4.3.5", "4.3.4.5"];

version.sort((a, b) => {
  const aParts = a.split(".").map(Number);
  const bParts = b.split(".").map(Number);
  const len = Math.max(aParts.length, bParts.length);
  for (let i = 0; i < len; i++) {
    const curA = aParts[i] ?? 0;
    const curB = bParts[i] ?? 0;
    if (curA != curB) {
      return curA - curB;
    }
  }
  return 0;
});
console.log(version);
