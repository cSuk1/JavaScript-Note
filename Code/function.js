
let args = [1, 2, 3, 4]
console.log(func(...args));

function func() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 