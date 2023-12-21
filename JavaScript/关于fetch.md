`fetch` 是 JavaScript 中用于进行网络请求的现代 API，它提供了一种更简洁、强大的方式来发送 HTTP 请求并处理响应。`fetch` 函数返回一个 Promise 对象，可以使用链式语法处理异步操作。它不依赖于浏览器的标准，因为它是原生 JavaScript 的内置函数，所以它不自动发送 cookies。

他是是 XMLHttpRequest 的一种替代方式。

- XMLHTTPRequest 特点：1、所有功能集中在一个对象上，写的代码可维护性不强且容易混乱。2、不能适配新的 promise API；
- Fetch 特点：1、精细的功能分割：头部信息，请求信息，响应信息等均分布在不同的对象上，可以处理各种复杂的数据交互场景。2、也可以适配 promise API；3、同源请求也可以自定义不带 cookie，某些服务不需要 cookie 的场景下能少些流量。

```JavaScript
fetch(url)
  .then(response => {
    // 处理响应
    if (response.ok) {
      return response.json(); // 解析响应数据为 JSON
    } else {
      throw new Error('请求失败');
    }
  })
  .then(data => {
    // 处理解析后的数据
    console.log(data);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
```
