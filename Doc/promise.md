JavaScript 的 Promise 是一种处理异步操作的机制。它提供了一种更优雅和可读性更高的方式来处理异步代码，避免了回调地狱（callback hell）的问题。Promise 的核心概念是表示一个异步操作的最终完成或失败，并可以返回结果。

Promise 有三个状态:

1. `pending`（进行中）：初始状态，表示异步操作正在进行中。
2. `fulfilled`（已完成）：表示异步操作成功完成。
3. `rejected`（已拒绝）：表示异步操作失败。

创建一个 Promise 的实例需要传递一个执行器函数（executor），该函数接受两个参数：`resolve`和 `reject`。在执行器函数中，我们可以执行异步操作，并根据操作结果调用 `resolve`或 `reject`来改变 Promise 的状态。

一旦 Promise 的状态发生改变，我们可以使用 `.then()`方法注册一个回调函数来处理操作成功的情况，使用 `.catch()`方法注册一个回调函数来处理操作失败的情况。此外，Promise 还提供了其他方法，例如 `.finally()`方法可以注册一个回调函数，无论 Promise 的状态如何都会被执行；`.all()`方法可以将多个 Promise 实例包装成一个新的 Promise 实例，并在所有 Promise 实例都成功完成后返回结果；`.race()`方法可以将多个 Promise 实例包装成一个新的 Promise 实例，并在其中任何一个 Promise 实例完成后返回结果。
