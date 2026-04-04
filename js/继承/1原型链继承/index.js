// 原型链继承核心:让子类的prototype指向父类实例
function Animal(name) {
    this.name = name
}
Animal.prototype.speak = function () {
    console.log(this.name + 'speak');
}
function Dog(age) {
    this.age = age
}
Dog.prototype = new Animal('小曾的宠物')
const myDog = new Dog(2)
console.log(myDog.name, myDog.age);
myDog.speak()


// 优点
// 子类可以顺着原型链向上找到父类的方法使用

// 缺点
// 属性共享：子类共享了父类原型上的属性，一旦父类有引用类型属性，一个实例修改了该属性，会影响到其余实例
// 例如：父类上有引用类型的属性hobbies:[],子类实例1-dog1.hobbies.push(1),子类实例2-dog2.hobbies也变为[1]
// 父类上有基本数据类型的属性name:'xxx',子类实例1-dog1.name='22'是在子类实例1上创建了新属性,不会影响父类上的属性
// 不能传递参数：无法向父类构造函数传参，因为父类构造函数已经被调用