// 版本号排序
// ['0.1.1', '2.3.3', '0.3002.1', '4.2', '4.3.5', '4.3.4']从小到大排序版本
const version = ["0.1.1", "2.3.3", "0.3002.1", "4.2", "4.3.5", "4.3.4.5"];

version.sort((a, b) => {
  const aParts = a.split(".").map(Number);
  const bParts = b.split(".").map(Number);
  while (aParts.length < 3) aParts.push(0);
  while (bParts.length < 3) bParts.push(0);
  for (let i = 0; i < 3; i++) {
    if (aParts[i] != bParts[i]) {
      return aParts[i] - bParts[i];
    }
  }
  return 0;
});
console.log(version);
