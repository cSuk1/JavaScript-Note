// 创建一个 WeakMap 实例
const privateData = new WeakMap();

{
    // 定义一个类
    class Person {
        constructor(name) {
            // 在私有数据中存储 name 属性
            privateData.set(this, { name });
        }

        getName() {
            // 从私有数据中获取 name 属性
            return privateData.get(this).name;
        }
    }

    // 创建一个 Person 对象
    const person = new Person("John");
    // 调用 getName 方法获取私有数据
    console.log(person.getName());
    // 私有数据不可直接访问
    console.log(privateData.get(person));
}

console.log(privateData);
