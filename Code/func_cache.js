function memoize(func) {
    // 存储缓存
    const cache = {};

    // 闭包
    return function (...args) {
        const key = JSON.stringify(args);
        // 存在缓存
        if (cache.hasOwnProperty(key)) {
            console.log("get from cache");
            return cache[key];
        }
        // 不存在缓存
        // 调用函数计算
        const result = func.apply(this, args);
        console.log("get from real time");
        // 存入缓存
        cache[key] = result;

        return result;
    };
};

// 示例函数，用于计算斐波那契数列
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

// 使用函数缓存优化斐波那契数列计算
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // 第一次计算，结果存入缓存
console.log(memoizedFibonacci(10)); // 直接从缓存中获取结果
