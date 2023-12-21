`EventEmitter` 是 Node.js 中一个核心模块，用于实现事件驱动编程。它提供了一种简单的机制，允许对象绑定和触发自定义事件。很多 Node.js 核心模块和第三方模块都使用 `EventEmitter` 来实现事件机制。

以下是 `EventEmitter` 的一些主要方法：

1. **on(eventName, listener)**: 为指定事件注册一个监听器，每次事件触发时，监听器会被调用。

   ```javascript
   const EventEmitter = require("events");
   const myEmitter = new EventEmitter();

   myEmitter.on("event", () => {
     console.log("Event occurred!");
   });

   myEmitter.emit("event"); // 触发 'event' 事件
   // 输出: Event occurred!
   ```

2. **once(eventName, listener)**: 为指定事件注册一个一次性监听器，当事件触发时，监听器会被调用，然后从事件中移除。

   ```javascript
   myEmitter.once("event", () => {
     console.log("This listener will be called only once.");
   });

   myEmitter.emit("event");
   // 输出: This listener will be called only once.

   myEmitter.emit("event"); // 不会触发监听器，因为它已经被移除
   ```

3. **emit(eventName[, ...args])**: 触发指定事件，并传递可选参数给事件监听器。

   ```javascript
   myEmitter.on("sum", (a, b) => {
     console.log(a + b);
   });

   myEmitter.emit("sum", 3, 5);
   // 输出: 8
   ```

4. **removeListener(eventName, listener)**: 移除指定事件的指定监听器。

   ```javascript
   const callback = () => {
     console.log("Callback for removal.");
   };

   myEmitter.on("remove", callback);

   myEmitter.removeListener("remove", callback);
   myEmitter.emit("remove"); // 不会触发监听器，因为它已经被移除
   ```

5. **removeAllListeners([eventName])**: 移除指定事件的所有监听器，或者移除所有事件的所有监听器。

   ```javascript
   myEmitter.removeAllListeners("event"); // 移除 'event' 事件的所有监听器
   myEmitter.removeAllListeners(); // 移除所有事件的所有监听器
   ```

`EventEmitter` 的使用使得开发者能够实现松散耦合的事件驱动程序，通过定义和触发事件来实现组件之间的通信。这种模式在处理异步操作、事件处理、回调函数等方面非常有用。许多 Node.js 核心模块，如 `http`、`fs` 等，都使用了 `EventEmitter` 模块来提供事件驱动的功能。
