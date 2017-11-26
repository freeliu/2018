/*
export 1

function printAvatar() {
    console.log("avatar PG-13")
}

function printA() {
    console.log("a PG-13")
}

module.exports.avatar=printAvatar

*/

// export 2 地址引用
// module.exports = {
//     avatar: () => console.log('avatar PG-14'),
//     price:11
//
// }


// export 3 对象工厂
module.exports = function () {
    return {
        avatar: () => console.log('avatar PG-14'),
        price: 11
    }
}