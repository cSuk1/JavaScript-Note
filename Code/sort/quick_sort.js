function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // 选择基准点
    const pivot = arr[0];
    const left = [];
    const right = [];

    // 将数组分成两部分，小于基准点的放在左边，大于基准点的放在右边
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 递归地对左右两部分进行快速排序，并将结果拼接在一起
    return quickSort(left).concat(pivot, quickSort(right));
}

// 示例
const unsortedArray = [5, 3, 7, 1, 8, 2, 6, 4];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);  // 输出: [1, 2, 3, 4, 5, 6, 7, 8]
