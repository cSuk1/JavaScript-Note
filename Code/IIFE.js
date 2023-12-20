let greeting = 'Hi';

// ! 先执行
(function (name) {
    let greeting = 'Hello';
    console.log(`${greeting}, ${name}`);
})('Andromeda');

// ! 后执行
console.log(`${greeting}, Andromeda`);

for (var i = 0; i < 5; i++) {

    // 为了凸显差异，我们将传入后的参数改名为 x
    // 当然由于作用域的不同，要继续在内部沿用 i 也是可以的。
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 1000 * x);
    })(i);
}
