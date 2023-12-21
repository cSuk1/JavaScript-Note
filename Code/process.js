console.log("start");

// * 参数
console.log(process.argv);
// * 环境变量
console.log(process.env.path);
// * 当前工作目录
console.log(process.cwd());
// * 注册事件处理程序。常用于处理进程的不同生命周期事件，如 exit、uncaughtException 等。
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});
// * 向标准输出流（stdout）写入数据。
process.stdout.write('Hello, Node.js!\n');
// * 在下一次事件循环迭代时运行指定的函数。这与 setTimeout(fn, 0) 是等效的，但是比他提前（最早执行）。
process.nextTick(() => {
    console.log('Next tick');
});

// * 退出进程
process.exit();
console.log("end");