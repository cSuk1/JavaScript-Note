// 链表节点
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 链表对象
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // 插入节点
    append(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
        return this;
    }
    // 迭代器对象
    [Symbol.iterator]() {
        let currentNode = this.head;
        return {
            next: () => {
                if (currentNode) {
                    let returnValue = currentNode.val;
                    currentNode = currentNode.next;
                    return {
                        value: returnValue,
                        done: false
                    }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
// ! 正确实现了[Symbol.iterator]方法的对象就可以通过for...of来进行遍历了。
for (let item of list) {
    console.log(item);
}
// ! 还可以使用扩展运算符来一次性获取链表中的所有元素并转换为数组。
console.log([...list]);