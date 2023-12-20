// ! 生成器返回值
function* genFunc() {
    console.log("Hello I am hearing");
    while (true) {
        let msg = yield;
        console.log(`I heard ${msg}`);
    }
}

let gen = genFunc();
gen.next();
gen.next('Hello');
gen.next('I am Jack');

// ! 生成器接收参数
function* loggerator() {
    console.log("开始执行");
    yield "stop";
    console.log("继续执行");
    return "done";
}

let logger = loggerator();
console.log(logger.next());
console.log(logger.next());

// ! 递归生成器
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

// ! 异步生成器
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


