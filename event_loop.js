let fs = require('fs');

/**
 * ! 在同步任务之后，其他所有异步任务之前，会优先执行 nextTick。
 * ! 可以想象是把 nextTick 的任务放到了当前循环的后面，
 * ! 与 promise.then() 类似，但比 promise.then() 更前面。
 * ! 意思就是在当前同步代码执行完成后，不管其他异步任务，先尽快执行 nextTick。
 */
// * 最先执行
process.nextTick(function () {
    console.log("process netTick");
})

// * 最后执行
fs.readFile('./data.json', 'utf8', function (err, data) {
    let json = JSON.parse(data);
    console.log(json);
})


/**
 * ! setImmediate 和 setTimeout，
 * ! 它们是属于不同的执行阶段了，分别是 timers 阶段和 check 阶段。
 */
// * 第二执行
setTimeout(function () {
    console.log("setTimeout exec done");
}, 1000)

// * 第三执行
setImmediate(function () {
    console.log("setImmediate exec done");
})

// 主线程休眠10秒
const delay = 5000; // 延时时间，单位：毫秒

const startTime = new Date().getTime(); // 获取当前时间戳
let cur;
while ((cur = new Date().getTime()) - startTime < delay) {
    // 空循环，延时等待
}

console.log(`main process done, time consuming ${cur - startTime} ms`);


setTimeout(() => {
    console.log('setTimeout start');
    new Promise((resolve) => {
        console.log('promise1 start');
        resolve();
    }).then(() => {
        console.log('promise1 end');
    })
    console.log('setTimeout end');
}, 0);

function promise2() {
    return new Promise((resolve) => {
        console.log('promise2');
        resolve();
    })
}

async function async1() {
    console.log('async1 start');
    // 当 async 函数执行到 await 关键字时，
    // 会暂停函数的执行，并立即返回一个未决（pending）状态的 Promise 对象。
    // 然后，函数会等待 await 后面的异步操作完成。
    // 这个异步操作可以是一个返回 Promise 的函数调用、
    // Promise 对象本身或其他符合 thenable 接口的对象。
    await promise2();
    // 一旦 await 后面的异步操作完成，async 函数会恢复执行，
    // 并使用异步操作的结果来解析返回的 Promise 对象。
    console.log('async1 end');
}

async1();
console.log('script end');

/**
 * async1 start
 * promise2
 * script end
 * async1 end
 * setTimeout start
 * promise1 start
 * setTimeout end
 * promise1 end
 */