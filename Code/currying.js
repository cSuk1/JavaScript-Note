
function add(x) {
    return function (y) {
        return x + y;
    };
}

// 闭包记住词法环境
const addTwo = add(2);
console.log(addTwo(3)); // 输出: 5

function multiply(x, y) {
    return x * y;
}

// bind()方法可以把一个函数的this绑定到一个指定对象
const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(3)); // 输出: 6

