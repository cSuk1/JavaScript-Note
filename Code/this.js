function myFunction() {
    console.log(this);
}

myFunction(); // 输出全局对象（浏览器环境下是window，Node.js环境下是global）