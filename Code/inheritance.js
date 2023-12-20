// 基类
function Person(name) {
    this.name = name;
}

// 基类的原型链
Person.prototype.job = 'frontend';
Person.prototype.sayHello = function () {
    console.log('Hello ' + this.name);
}

let person = new Person('Andromeda');
person.sayHello(); // Hello Andromeda

// * 原型链继承
{
    function Child() {
        this.name = 'Andromedda';
    }
    // ! 设置child的原型为Person的实例
    Child.prototype = new Person();
    let child = new Child();
    console.log(child.job);
    // instanceof 判断元素是否在另一个元素的原型链上
    // child是Person类的实例
    console.log(child instanceof Person);
}

// * 构造函数继承
{
    function Child() {
        // 调用父类的构造函数，传递执行上下文this
        Person.call(this, 'Andromeda');
    }
    let child = new Child();
    // ! 这种继承访问不了原型链上的属性，因为他不在原型链上
    console.log(child.job);
    console.log(child instanceof Person);
}

// * 组合继承
{
    function Child() {
        // 调用父类的构造函数，传递执行上下文this
        Person.call(this, 'Andromeda');
    }
    // 同时设置原型链
    Child.prototype = new Person();
    let child = new Child();
    // ! 这种继承能访问原型链上的属性，因为他在原型链上
    console.log(child.job);
    console.log(child instanceof Person);
}

// * 原型式继承
{
    /**
     * 通过使用一个现有对象作为新对象的原型来创建对象。
     * 通过 Object.create() 方法可以实现原型式继承。
     * 新对象继承了原型对象的属性和方法。
     * 但是，如果原型对象的属性值是引用类型，
     * 那么修改原型对象的属性值会影响所有继承自该原型的对象。
     */
    let super0 = new Person();
    // * Object.create()方法规范了原型式继承。
    // * 这个方法接收两个参数，一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。
    let super1 = Object.create(super0);
    console.log(super1 instanceof Person);
    console.log(super1.job);
}

// * 寄生式继承
{
    let super0 = new Person();
    function parasiticInheritance(obj) {
        // 在一个函数内部创建一个新对象，
        // 然后通过扩展对象的方式添加额外的属性和方法，
        // 最后返回这个新对象作为继承的结果。
        let result = Object.create(obj);
        result.gender = "girl";
        result.info = function () {
            console.log(this.gender);
        };
        return result;
    }
    let super1 = parasiticInheritance(super0);
    console.log(super1 instanceof Person);
    console.log(super1.job);
    console.log(super1.gender);
    super1.info();
}

// * ES6 类继承
{
    // ES6 引入了 class 关键字，可以使用类和 extends 关键字来实现继承。
    // 通过创建类和使用 extends 关键字，子类可以继承父类的属性和方法。这种继承方式更加简洁和易于理解。
    class Child extends Person {
        constructor(name) {
            super(name);
            this.gender = 'boy';
        }
    }
    let child = new Child('Jack');
    console.log(child.job, child.gender, child.name);
    console.log(child instanceof Person);
}