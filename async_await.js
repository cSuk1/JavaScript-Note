// ! 声明一个异步函数（async function）。异步函数是一种特殊类型的函数，
// ! 它在内部使用await关键字来等待异步操作的完成，并返回一个Promise对象。
async function getData() {
    return Promise.resolve('Andromeda');
}

async function getMoreData(data) {
    return Promise.resolve(data + ' email is ech0uname@qq.com');
}

async function getAll() {
    // const data = getData();
    // const moreData = getMoreData(data);
    const data = await getData();
    const moreData = await getMoreData(data);
    return `All the data: ${data}, ${moreData}`;
}

getAll().then((all) => {
    console.log(all)
})