const str = 'abc@mail.com'
// 单词字符(字母、数组、下划线)、任意字符、-出现一次以上
const reg = /^[\w.-]+@[\w.-]+\.\w+$/g
console.log(str.match(reg));
