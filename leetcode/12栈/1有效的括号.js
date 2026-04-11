var isValid = function (s) {
  let stack = []; // 栈，存储左括号
  // 遍历字符串，遇到左括号入栈，右括号将栈顶左括号出栈与当前右括号类型比较
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      let cur = stack.pop();
      if (s[i] == ")" && cur != "(") return false;
      if (s[i] == "}" && cur != "{") return false;
      if (s[i] == "]" && cur != "[") return false;
    }
  }
  // 遍历完后，判断是否有多余的左括号
  if (stack.length) return false;
  return true;
};
