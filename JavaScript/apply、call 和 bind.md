1. `apply` 方法：

   - 语法：`function.apply(thisArg, [argsArray])`
   - 参数：

     - `thisArg`：函数执行时的上下文对象，即函数内部的 `this` 值。
     - `argsArray`（可选）：传递给函数的参数数组，可以是真正的数组或类数组对象。

   - 功能：`apply` 方法将函数在指定的上下文中调用，并且参数以数组的形式传递。
   - 示例：

     ```javascript
     functiongreet(name) {
     console.log(`Hello, ${name}!`);
     }

     greet.apply(null, ['John']);
     // 输出：Hello, John!
     ```

   - 在上面的示例中，`apply` 方法将 `greet` 函数在 `null` 上下文中调用，并将 `'John'` 作为参数传递给函数。

2. `call` 方法：

   - 语法：`function.call(thisArg, arg1, arg2, ...)`
   - 参数：

     - `thisArg`：函数执行时的上下文对象，即函数内部的 `this` 值。
     - `arg1, arg2, ...`：传递给函数的参数列表，可以是任意数量的参数。

   - 功能：`call` 方法将函数在指定的上下文中调用，并且参数以逗号分隔的形式传递。
   - 示例：

     ```javascript
     functiongreet(name) {
     console.log(`Hello, ${name}!`);
     }

     greet.call(null, 'John');
     // 输出：Hello, John!
     ```

   - 在上面的示例中，`call` 方法将 `greet` 函数在 `null` 上下文中调用，并将 `'John'` 作为参数传递给函数。

> `apply` 和 `call` 的区别在于参数的传递形式：`apply` 使用数组传递参数，`call` 使用逗号分隔的参数列表传递参数。除了参数传递方式不同外，它们的作用是相同的：在指定的上下文中调用函数。

3. `bind` 方法：

bind 方法和 call 很相似，第一参数也是 `this`的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)

改变 `this`指向后不会立即执行，而是返回一个永久改变 `this`指向的函数

```javascript
function test(...args) {
  console.log(this.name, args);
}

let obj = {
  name: "test",
  test,
};

let func = test.bind(obj);
func("hello", "world");
```
