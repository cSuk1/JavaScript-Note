class Stack {
    constructor() {
        this.stack = [];
        this.len = 0;
    }
    push(params) {
        this.stack.push(params);
        this.len++;
    }
    pop() {
        if (this.len > 0) {
            this.stack.pop();
            this.len--;
        }
        else
            console.log("Stack is empty");
    }
    front() {
        if (this.len == 0)
            console.log("Stack is empty");
        else
            return this.stack[this.len - 1];
    }
    length() {
        return this.len;
    }
    empty() {
        return this.len == 0;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.empty(), stack.length(), stack.front());
stack.pop();
stack.pop();
console.log(stack.empty(), stack.length(), stack.front());
