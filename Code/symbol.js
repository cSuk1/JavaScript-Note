// 创建一个新的 Symbol
const mySymbol = Symbol();

// 创建带有描述字符串的 Symbol
const mySymbolWithDescription = Symbol('This is a description');

const obj = {
    mySymbol: 'Hello world!',
    [mySymbol]: 'Hello, Symbol!',
    regularProperty: 'Hello, World!'
};

console.log(obj.mySymbol);
console.log(obj[mySymbol]);  // 输出: Hello, Symbol!
console.log(obj.regularProperty);  // 输出: Hello, World!
