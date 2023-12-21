function shallowCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

/**
 * @brief 深拷贝
 * @param {*} obj 
 * @returns 
 */
function deepCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    // 遍历对象
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            // 检查对象自身是否包含指定名称的属性（而不是原型链上的属性）
            if (obj.hasOwnProperty(key)) {
                // 如果属性的值是对象，递归复制
                if (typeof obj[key] === 'object') {
                    newObj[key] = deepCopy(obj[key]);
                } else {
                    // 如果属性的值不是对象，则直接复制
                    newObj[key] = obj[key];
                }
            }
        }
    }
    return newObj;
}

let obj = {
    kind: "dog"
}

let student = {
    name: '张三',
    age: 18,
    score: 90,
    pet: obj
}

// * 浅拷贝
console.log(student);
let student1 = shallowCopy(student);
student1.pet.kind = 'cat';
console.log(student);

// * 递归实现深拷贝
console.log(student);
let student2 = deepCopy(student);
student2.pet.kind = 'rabbit';
// 和student1共享
console.log(student);

// * deepclone实现深拷贝
const dc = require('lodash');
console.log(student);
const student3 = dc.cloneDeep(student);
student3.pet.kind = 'fish';
console.log(student);