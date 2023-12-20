const WebSocket = require('ws');

// 创建 WebSocket 服务器
const wss = new WebSocket.Server({ port: 8888 });

// 监听客户端连接事件
wss.on('connection', function connection(ws) {
    console.log('客户端已连接');

    // 监听客户端发送的消息
    ws.on('message', function incoming(message) {
        // 将字节转为字符串
        message = message.toString();
        console.log('收到客户端消息:', message);
        // 向客户端发送消息
        // ws.send('服务器收到消息: ' + message);

    });

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
        ws.send(data);
    });

    // 监听客户端关闭连接事件
    ws.on('close', function close() {
        console.log('客户端已断开连接');
    });
});