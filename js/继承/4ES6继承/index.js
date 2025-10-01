class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(this.name + 'speak');
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}
const myDog = new Dog('小曾的宠物', 2)
console.log(myDog.name, myDog.age);
myDog.speak()
