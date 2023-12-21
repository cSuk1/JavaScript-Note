{
    // * 代理
    const target = {
        name: "Alice",
        age: 25,
    };

    // 创建一个代理对象
    const proxy = new Proxy(target, {
        // 拦截属性的读取和设置
        get(target, property) {
            console.log(`读取属性：${property}`);
            return target[property];
        },
        set(target, property, value) {
            console.log(`设置属性：${property}，值：${value}`);
            target[property] = value;
        },
    });
    console.log(proxy.name);
    proxy.age = 30;
    console.log(proxy.age);
}

{
    // * 可撤销的代理
    const target = {
        name: "Alice",
        age: 25,
    };
    const { proxy, revoke } = Proxy.revocable(target, {
        // 拦截属性的读取和设置
        get(target, property) {
            console.log(`读取属性：${property}`);
            return target[property];
        },
        set(target, property, value) {
            console.log(`设置属性：${property}，值：${value}`);
            target[property] = value;
        },
    });
    console.log(proxy.name);
    proxy.age = 30;
    revoke();
}

{
    // * 反射
    const target = {
        name: "Alice",
        age: 25
    };

    console.log(Reflect.get(target, "name")); // 输出: Alice

    Reflect.set(target, "age", 30);

    console.log(Reflect.has(target, "age")); // 输出: true

    Reflect.deleteProperty(target, "name");

    console.log(target); // 输出: { age: 30 }

    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    Reflect.apply(greet, null, ["Alice"]);
}
