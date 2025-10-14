const str=`# 纯函数

对于相同的输入总是会得到相同的输出

不会有副作用

![asd替代](https://yuanbao.tencent.com/chat/naQivTmsDa/f4d71bb1-7102-490d-b3fc-c7f7594969d2)

如果一个函数满足以上两点，那么就是一个纯函数

![替代](https://yuanbao.tencent.com/chat)

`
// \u4E00-\u9FFF表示中文字符集
// ![中文字符、单词字符(字母、数字、下划线)出现0次及以上](单词字符(字母、数字、下划线)、.、/、-出现1次及以上)
// ^xxx$配合m表示每行进行首尾判断，而不是只在字符串开头结尾
const reg=/^\!\[[\u4E00-\u9FFF\w]*\]\([\w:./-]*\)$/gm
console.log(str.match(reg));
