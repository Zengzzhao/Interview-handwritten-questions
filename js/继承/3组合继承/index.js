function Animal(name) {
    this.name = name
}
Animal.prototype.speak = function () {
    console.log(this.name + 'speak');
}
function Dog(name, age) {
    // 使用构造函数继承,继承属性
    Animal.call(this, name)
    this.age = age
}
// 使用原型链继承,继承方法
Dog.prototype = new Animal()

const myDog = new Dog('小曾的宠物', 2)
console.log(myDog.name, myDog.age);
myDog.speak()

// 优点
// 解决原型链继承(属性共享,不能传参)与构造函数继承(不能继承方法)的缺点
// 继承了属性,方法
// 可以传参

// 缺点
// 父类构造函数调用了两次,导致子类原型上有一份父类属性,子类实例上也有一份父类属性
