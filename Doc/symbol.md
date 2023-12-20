Symbol 是一种在 ECMAScript 6 中引入的新的原始数据类型。它是一种独特且不可变的数据类型，用于创建唯一的标识符。

Symbol 的主要特点如下：

1. 独一无二：每个 Symbol 值都是独一无二的，即使它们的描述符相同，它们也是不相等的。这意味着 Symbol 可以用作标识符，用于确保唯一性，避免命名冲突。
2. 不可变性：Symbol 值是不可变的，一旦创建就无法修改其值。这意味着 Symbol 值是固定的，不会被改变。
3. 作为属性键：Symbol 值可以作为对象属性的键，用于确保属性名的唯一性。与字符串作为属性键不同，Symbol 作为属性键不会与其他属性键冲突。
4. 隐藏性：通过 Symbol 创建的属性键不会出现在常规的属性遍历中，不会被意外访问到。这使得 Symbol 可以用于定义一些特殊的属性或行为，只能通过专门的方法来访问。

Symbol 的创建方式有两种：

1. 使用 Symbol 函数创建：可以使用全局的 Symbol 函数来创建一个 Symbol 值。例如：

```javascript
// 创建一个新的 Symbol
const mySymbol = Symbol();

// 创建带有描述字符串的 Symbol
const mySymbolWithDescription = Symbol("This is a description");
```

上述代码将创建一个唯一的 Symbol 值，并将其赋值给变量 s。

2. 使用 Symbol.for 函数创建：Symbol.for 函数可以创建一个可被全局共享的 Symbol 值。如果之前已经使用相同的字符串作为参数调用过 Symbol.for 函数，那么会返回之前创建的 Symbol 值。例如：

```javascript
var s = Symbol.for("key");
```

上述代码创建了一个具有键为'key'的 Symbol 值，并将其赋值给变量 s。如果之前已经使用相同的键创建过 Symbol 值，那么会返回之前创建的 Symbol 值。

Symbol 在 JavaScript 中具有广泛的应用场景，例如：

- 用作对象属性的唯一键，避免属性名冲突。
- 用于定义一些特殊的行为或属性，例如迭代器(iterator)、生成器(generator)等。
- 用于创建私有属性或方法，保护对象内部的状态。
- 用于定义常量或枚举值，确保唯一性。
- 在一些内置对象中，如 Symbol.iterator 用于定义可迭代对象的默认迭代器。

### Symbol 的常用内置属性

JavaScript 中有一些预定义的 `Symbol` 属性，它们用于定义对象的行为。

`Symbol.iterator`: 一个用于定义对象默认迭代器的方法。

```javascript
const iterableObject = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterableObject) {
  console.log(value); // 输出: 1, 2, 3
}
```

`Symbol.for` 和 `Symbol.keyFor`: 用于创建和检索全局 Symbol 注册表中的 Symbol。

```javascript
// 创建或检索全局 Symbol
const globalSymbol = Symbol.for("globalSymbol");

// 检索 Symbol 的 key
const key = Symbol.keyFor(globalSymbol);
console.log(key); // 输出: globalSymbol
```

### Symbol 的使用场景

**作为唯一的属性名** ：当确保对象属性名唯一性很重要时，可以使用 `Symbol`。

```javascript
const LOG_LEVEL = {
  INFO: Symbol("info"),
  ERROR: Symbol("error"),
  WARNING: Symbol("warning"),
};

function logMessage(message, level) {
  switch (level) {
    case LOG_LEVEL.INFO:
      console.log(`[INFO] ${message}`);
      break;
    case LOG_LEVEL.ERROR:
      console.error(`[ERROR] ${message}`);
      break;
    case LOG_LEVEL.WARNING:
      console.warn(`[WARNING] ${message}`);
      break;
    default:
      console.log(message);
  }
}

logMessage("This is an informational message.", LOG_LEVEL.INFO);
```

**使用内置 Symbol** ：内置的 `Symbol` 用于定义对象的行为，如迭代、获取对象属性等。

```javascript
const myArray = [1, 2, 3];
const iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // 输出: { value: 1, done: false }
console.log(iterator.next()); // 输出: { value: 2, done: false }
console.log(iterator.next()); // 输出: { value: 3, done: false }
console.log(iterator.next()); // 输出: { value: undefined, done: true }
```
