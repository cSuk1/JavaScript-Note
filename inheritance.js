// ! 基类
class Person {
    constructor(name) {
        this.name = name;
    }
}

// ! extend继承
class Child extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
let child = new Child('小明', 3);
console.log(child);

class Girl {
    constructor(age) {
        this.age = age;
    }
}

// ! 通过原型链继承
// ! 子类原型等于父类的实例Child.prototype = new Person()
Girl.prototype = new Person();
let girl = new Girl(18);
girl.name = '小红';
girl.school = '华南理工大学';
console.log(girl);