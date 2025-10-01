// 构造函数继承核心:在子类构造函数中使用call继承父类属性
function Animal(name) {
    this.name = name
}
function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}
const myDog = new Dog('小曾的宠物', 2)
console.log(myDog.name, myDog.age);

// 优点
// 解决原型链继承属性共享问题
// 可传参

// 缺点
// 只继承属性,没有继承方法