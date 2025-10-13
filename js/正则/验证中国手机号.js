const str = '13800138000'
// 第一位为1，第二位为3-9，总长度为11剩下补9为数字
const reg = /^1[3-9]\d{9}$/g
console.log(str.match(reg));
