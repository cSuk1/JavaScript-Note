// 创建一个原型对象
var personPrototype = {
    greet: function () {
        console.log('Hello!');
    }
};

// 创建一个对象，并将原型设置为 personPrototype
var person = Object.create(personPrototype);

// 调用对象的方法
person.greet(); // 输出: Hello!

// 原型链示例
console.log(person.__proto__ === personPrototype); // 输出: true
console.log(Object.getPrototypeOf(person) === personPrototype); // 输出: true
console.log(personPrototype.isPrototypeOf(person)); // 输出: true