// 伪数组
function foo(params) {
    console.log(arguments); // 伪数组
    console.log(arguments.length); // 3
    console.log(typeof arguments); // object
    console.log(Object.getPrototypeOf(arguments) === Object.prototype);
    console.log(Array.isArray(arguments)); // false
}

// 真正的数组
var arr = [1, 2, 3];
console.log(arr); // 真正的数组
console.log(arr.length); // 3
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true

console.log("____________________________________________________");
foo(arr);