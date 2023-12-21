function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        // 每一轮冒泡排序将最大的元素移到末尾
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换相邻元素
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// 示例
const unsortedArray = [5, 3, 7, 1, 8, 2, 6, 4];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);  // 输出: [1, 2, 3, 4, 5, 6, 7, 8]
