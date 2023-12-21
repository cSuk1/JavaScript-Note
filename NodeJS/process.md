`process` 对象在 Node.js 中是一个全局对象，它提供了有关当前 Node.js 进程的信息，以及控制当前 Node.js 进程的方法。关于 `process`常见的属性有如下：

- process.env：环境变量，例如通过 `process.env.NODE_ENV 获取不同环境项目配置信息
- process.nextTick：这个在谈及 `EventLoop` 时经常为会提到
- process.pid：获取当前进程 id
- process.ppid：当前进程对应的父进程
- process.cwd()：获取当前进程工作目录，
- process.platform：获取当前进程运行的操作系统平台
- process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
- 进程事件： process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听
- 三个标准流： process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出
- process.title 指定进程名称，有的时候需要给进程指定一个名称

**1、process.exit([code])** : 用于退出当前进程。可选的 `code` 参数用于指定退出码，默认为 0（表示成功）。

```JavaScript
process.exit();  // 退出进程
```

**2、process.argv** : 包含命令行参数的数组。`process.argv[0]` 是 Node.js 的执行路径，`process.argv[1]` 是当前执行的脚本文件路径，之后的元素是传递给脚本的命令行参数。

```JavaScript
// 假设脚本为 example.js
console.log(process.argv);
// 输出: [ 'node', 'example.js', arg1, arg2, ... ]
```

**3、process.env** : 包含用户环境信息的对象。可以用来访问系统环境变量。

```JavaScript
console.log(process.env.HOME);  // 输出: 用户的主目录
```

**4、process.cwd()** : 返回当前工作目录的路径。

```JavaScript
console.log(process.cwd());  // 输出: 当前工作目录的路径
```

**5、process.on(event, callback)** : 用于注册事件处理程序。常用于处理进程的不同生命周期事件，如 `exit`、`uncaughtException` 等。

```JavaScript
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

```

**6、process.stdin, process.stdout, process.stderr** : 分别代表标准输入、标准输出和标准错误流。可以用于从控制台读取输入或向控制台输出信息。

```JavaScript
process.stdout.write('Hello, Node.js!\n');
```

**7、process.nextTick(callback[, ...args])** : 用于将一个回调函数推迟到下一个事件循环迭代中执行。相比 `setTimeout`，`process.nextTick` 的回调函数会在当前事件循环的末尾执行。

```JavaScript
process.nextTick(() => {
  console.log('Next tick');
});
```
