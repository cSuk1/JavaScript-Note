
function add(x) {
    return function (y) {
        return x + y;
    };
}

// 闭包记住词法环境
const addTwo = add(2);
console.log(addTwo(3)); // 输出: 5

function multiply(...args) {
    let ret = 1;
    for (let num in args) {
        ret *= args[num];
    }
    return ret * this.num;
}

let obj = {
    num: 2
}
// bind()方法可以把一个函数的this绑定到一个指定对象
const multiplyByTwo = multiply.bind(obj);
console.log(multiplyByTwo(2, 3)); // 输出: 12
