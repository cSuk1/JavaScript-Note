/**
 * new Promise(executor)：创建一个新的Promise对象，
 * 其中executor是一个包含resolve和reject两个参数的函数。
 * 在这个函数中执行异步操作，并在操作完成时调用resolve方法来表示成功，
 * 或调用reject方法来表示失败。
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 生成随机数
        const num = Math.random() % 1;
        if (num > 0.5) {
            reject("reject " + num);
        } else {
            resolve("resolve " + num);
        }
    }, 1000);
}).
    /**
     * then(onFulfilled, onRejected)：
     * 用于注册Promise对象的成功和失败回调函数。
     * onFulfilled在Promise对象状态变为fulfilled时被调用，
     * 接收成功的结果作为参数；onRejected在Promise对象状态变为rejected时被调用，
     * 接收错误信息作为参数。then方法可以链式调用，并返回一个新的Promise对象。
     */
    then((result) => {
        console.log("promise ");
        console.log(result);
    }).catch((err) => {
        console.log("catch ");
        console.log(err);
    }).finally(() => {
        console.log('Finally');
    });

/**
 * Promise.resolve(value)：
 * 返回一个已解析的Promise对象，
 * 该对象的状态为fulfilled，并将给定的value作为结果。
 */
Promise.resolve("Resolved")
    .then(result => {
        console.log(result); // 输出 "Resolved"
    });

/**
 * Promise.reject(reason)：
 * 返回一个已拒绝的Promise对象，
 * 该对象的状态为rejected，并将给定的reason作为拒绝原因。
 */
Promise.reject("Rejected")
    .catch(error => {
        console.error(error); // 输出 "Rejected"
    });

/**
 * Promise.prototype.catch(onRejected)：
 * 注册Promise对象的失败回调函数，用于捕获并处理Promise对象的拒绝状态。
 * 相当于then(null, onRejected)。
 * 
 * Promise.prototype.finally(onFinally)：
 * 注册一个回调函数，无论Promise对象最终状态如何（成功或失败），都会执行该回调函数。
 */
Promise.reject("Rejected")
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    }).finally(() => {
        console.log('Finally');
    });

/**
 * Promise.all(iterable)：接收一个可迭代对象（如数组）作为参数，
 * 返回一个新的Promise对象。该Promise对象在所有传入的Promise对象都变为fulfilled状态时，
 * 才会变为fulfilled状态，并将所有Promise对象的结果组成的数组作为结果。
 */
const getData = () => Promise.resolve('data');
const getMoreData = () => Promise.resolve('more data');

Promise.all(
    [getData(),
    getMoreData()]
).then(result => {
    const [data, moreData] = result;
    console.log(data, moreData);
})