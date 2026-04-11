function deepClone(target) {
  // 处理基本数据类型、null
  if (typeof target != "object" || target == null) return target;
  let obj = Array.isArray(target) ? [] : {};
  for (const key in target) {
    obj[key] = deepClone(target[key]);
  }
  return obj;
}

// 浅拷贝
function shallowClone(target) {
  // 处理基本数据类型、null
  if (typeof target != "object" || target == null) return target;
  let obj = Array.isArray(target) ? [] : {};
  for (const key in target) {
    obj[key] = target[key];
  }
  return obj;
}

// 考虑循环引用、原型链、Symbol的深拷贝
// 循环引用:a有属性引用了b,b里面有属性又引用回了a,导致for-in无限递归
// 原型链:传入一个继承了原型B的原型A所对应的实例对象，返回深拷贝后的对象要保持原型链（上面直接obj={}/[],导致原型变为了Object/Array,原型链断了）
// Symbol:不能被for-in遍历到

function deepClone2(target, map = new WeakMap()) {
  // 处理基本数据类型、null
  if (typeof target != "object" || target == null) return target;
  // 记录已拷贝过的对象，处理循环引用
  if (map.has(target)) return map.get(target);
  // 创建对象时保留原型链
  const obj = Array.isArray(target)
    ? []
    : Object.create(Object.getPrototypeOf(target));
  // 记录当前对象
  map.set(target, obj);
  // 对象自己身上的普通属性拷贝
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      obj[key] = deepClone(target[key], map);
    }
  }
  // 处理Symbol
  const symbolKeys = Object.getOwnPropertySymbols(target);
  for (const symKey of symbolKeys) {
    obj[symKey] = deepClone(target[symKey], map);
  }
  return obj;
}
