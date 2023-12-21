## 生成器基础

当调用 Generator 函数时，它不会立即执行，而是返回一个称为 Generator 对象的迭代器。通过调用该迭代器的 `next()` 方法，可以逐步执行 Generator 函数的代码，并在遇到 `yield` 关键字时暂停函数的执行，并返回一个包含当前状态的对象。

每次调用 `next()` 方法时，Generator 函数会从上一个 `yield` 语句的位置继续执行，直到遇到下一个 `yield` 或者函数结束。在执行过程中，可以通过 `yield` 关键字将一个值传递给调用方。

```JavaScript
function* loggerator() {
  console.log("开始执行");
  yield "stop";
  console.log("继续执行");
  return "done";
}

let logger = loggerator();
console.log(logger.next());
console.log(logger.next());
```

第一次调用 `next()`方法时，生成器函数会执行到第一个 `yield`的位置然后暂停执行，并把对应的值放在 `value`中返回，此时函数还没有 `return`，所以 `done`的值为 `false`。

第二次调用 `next()`方法时，生成器函数从第三行开始执行，在 `return`语句处结束执行。函数返回值同样被放在 `value`属性中，但因为此时函数的运行已经结束了，所以 `done`的值为 `true`。

因为生成器对象实现了迭代器协议，所以我们可以通过 `for...of`循环和扩展运算符来对其进行操作。

```javascript
function* loggerator() {
  console.log("开始执行");
  yield "stop";
  console.log("继续执行");
  return "done";
}

let logger = loggerator();
for (let value of logger) {
  console.log(value);
}
```

`yield` 表达式除了可以返回一个值之外，还可以用来接收外部传入的值。当调用 Generator 对象的 `next()` 方法时，可以通过传递参数将值传递给 Generator 函数内部的 `yield` 表达式。

第一个 `next()`方法中传入的值会被忽略，这是因为此时函数才刚刚开始执行，还没有遇到任何 `yield`可以接收输入值，函数会在 `let msg = yield`处停止执行，因为遇到了 `yield`关键字。通过调用 `next`方法可以带一个参数，该参数就会被当作上一个 `yield`表达式的返回值。

```javascript
function* genFunc() {
  console.log("Hello I am hearing");
  while (true) {
    let msg = yield;
    console.log(`I heard ${msg}`);
  }
}

let gen = genFunc();
gen.next();
gen.next("Hello");
gen.next("I am Jack");
```

## 递归生成器

`yield*` 是 JavaScript 中的一种语法，用于在 Generator 函数内部委托（delegate）执行另一个可迭代对象或 Generator 函数的迭代过程。

使用 `yield*` 语法可以将迭代控制权交给另一个可迭代对象，并从中产生值。它的语法形式为 `yield* expression`，其中 `expression` 是一个可迭代对象或 Generator 函数。

当执行 `yield* expression` 时，会在 Generator 函数内部暂停当前的迭代过程，并将控制权转移到 `expression` 所代表的迭代对象或 Generator 函数上。迭代对象或 Generator 函数生成的值会被逐个返回给调用方。

```JavaScript
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    // ! 先序遍历
    *[Symbol.iterator]() {
        yield this.data;
        /**
         * 执行 yield* expression 时，会在 Generator 函数内部暂停当前的迭代过程，
         * 并将控制权转移到 expression 所代表的迭代对象或 Generator 函数上。
         * 迭代对象或 Generator 函数生成的值会被逐个返回给调用方。
         */
        if (this.left) yield* this.left;
        if (this.right) yield* this.right;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
/**
 *    1
 *  2   3
 * 4 5 6 7
 */

// console.log([...root]);
for (let node of root) {
    console.log(node);
}
```

## 异步生成器

异步生成器（Async Generator）是指使用异步函数定义的生成器函数。异步生成器函数可以使用 `async` 关键字声明，并在函数体内部使用 `yield` 关键字来暂停执行并产生值。

异步生成器函数与普通生成器函数的区别在于，异步生成器函数可以在 `yield` 表达式中使用异步操作（如异步函数调用、Promise 等），并通过 `await` 关键字来等待异步操作的完成。

定义了一个异步生成器函数 `asyncGenerator`。它使用 `async function*` 语法声明，表明该函数是一个异步生成器函数。

在函数体内部，我们使用 `yield` 关键字产生了三个值：`'Hello'`、`'Async'` 和 `'Generator'`。在 `yield 'Hello'` 后面，我们使用 `await` 关键字等待一个模拟的异步操作 `delay(1000)` 的完成，以模拟异步操作的延迟。

`delay` 函数返回一个 Promise，它会在指定的毫秒数后解析。通过使用 `await` 关键字，异步生成器函数会等待 Promise 的解析结果，并在解析完成后继续执行。

在 `main` 函数中，我们创建了一个异步生成器对象 `generator`，并通过调用 `next()` 方法来逐步获取异步生成器产生的值。我们使用 `await` 关键字来等待每个 `next()` 方法的结果。

```JavaScript
async function* asyncGenerator() {
  yield 'Hello';
  await delay(1000); // Simulating an asynchronous operation
  yield 'Async';
  yield 'Generator';
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const generator = asyncGenerator();

  console.log(await generator.next()); // { value: 'Hello', done: false }

  await delay(2000); // Simulating a delay

  console.log(await generator.next()); // { value: 'Async', done: false }
  console.log(await generator.next()); // { value: 'Generator', done: false }

  console.log(await generator.next()); // { value: undefined, done: true }
}

main();
```
