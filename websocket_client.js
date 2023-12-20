const WebSocket = require('ws');
// 创建 WebSocket 对象并建立连接
const socket = new WebSocket("ws://localhost:8888");

// 连接建立成功的回调函数
socket.onopen = function (event) {
    console.log("WebSocket 连接已建立");

    // 发送数据
    socket.send("Hello, Server!");
};

// 接收到服务器发送的消息的回调函数
socket.onmessage = function (event) {
    console.log("收到服务器消息：" + event.data);
};

// 连接关闭的回调函数
socket.onclose = function (event) {
    console.log("WebSocket 连接已关闭");
};

// 连接错误的回调函数
socket.onerror = function (error) {
    console.error("WebSocket 错误：" + error);
};

// 监听标准输入
process.stdin.on('data', function (data) {
    // 将字节转为字符串
    data = data.toString();
    // 清洗最后的换行符
    if (data.charAt(data.length - 1) === '\n') {
        data = data.substring(0, data.length - 1);
    }
    // console.log('收到标准输入:', data);
    // 向客户端发送消息
    socket.send(data);
});