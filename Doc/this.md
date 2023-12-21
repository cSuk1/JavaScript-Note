在全局环境中调用一个函数，函数内部的 this 指向的是全局变量 window，通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身。

普通函数 this 指向：当函数被正常调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象 window；通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身。new 关键字构建好了一个新对象，并且构造函数中的 this 其实就是新对象本身。

嵌套函数中的 this 不会继承外层函数的 this 值。 箭头函数 this 指向：箭头函数并不会创建其自身的执行上下文，所以箭头函数中的 this 取决于它的外部函数。

全局上下文：在全局作用域中，函数直接作为独立的函数调用，此时 `this`指向全局对象（浏览器环境下是 `window`对象，Node.js 环境下是 `global`对象）。

```JavaScript
console.log(this);
```

函数调用：当函数作为独立函数调用时，`this`仍然指向全局对象。

```JavaScript
function myFunction() {
  console.log(this);
}

myFunction(); // 输出全局对象（浏览器环境下是window，Node.js环境下是global）
```

对象方法：当函数作为对象的方法调用时，`this`指向调用该方法的对象。

```JavaScript
const obj = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, ${this.name}`);
  }
};

obj.sayHello(); // 输出 "Hello, John"
```

构造函数：通过构建函数 `new`关键字生成一个实例对象，此时 `this`指向这个实例对象

```JavaScript
function Person(name) {
  this.name = name;
}

const person = new Person('John');
console.log(person.name); // 输出 "John"
```

`call()`和 `apply()`方法：通过使用 `call()`或 `apply()`方法，可以显式指定函数执行时的上下文对象。

```JavaScript
function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const obj1 = { name: 'John' };
const obj2 = { name: 'Alice' };

sayHello.call(obj1); // 输出 "Hello, John"
sayHello.apply(obj2); // 输出 "Hello, Alice"
```
