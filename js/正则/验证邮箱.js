const str = 'abc@mail.com'
// 单词字符(字母、数字、下划线)、.、-出现一次以上 + @ + 单词字符(字母、数字、下划线)、.、-出现一次以上 + . + 单词字符(字母、数字、下划线)出现一次以上
const reg = /^[\w.-]+@[\w.-]+\.\w+$/g
console.log(str.match(reg));
