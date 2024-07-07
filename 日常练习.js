//promise练习
// function fetchData() {
//     return new Promise((reslove,reject) => {
//         reslove("hi");
//        // reject("");
//     })
// }


// fetchData().then(
//     (result) => {
//         console.log('Data fetched successfully:', result);
//        // console.log('Data fetched successfully:', reject);
//     },(error) => {
//         console.log('Data fetched successfully:', error);

//     }
// ).then(
//     () => {
//         console.log('This will execute even if the previous promise was rejected.');
//     }
// )
//promis顺序
// const promiseA = new Promise((resolve, reject) => {
//     resolve(777);
//   });
//   // 此时，“promiseA”已经敲定了
//   promiseA.then((val) => console.log("异步日志记录有值：", val));
//   console.log("立即记录");

//解构
// const result = /(a+)(b+)(c+)/.exec("aaabcc");
// const [, a, b, c] = result;
// console.log(result); // "aaa" "b" "cc"

//const a = Object.freeze([12,3,4]);
//a[1] = 1;
//console.log(a);

//哈希
// function MoreThanHalfNum_Solution( numbers ) {
//     hash = []
//     max = [0,0];
//     numbers.forEach((number,index) => {
//         (hash[number]===undefined)? hash[number]=1 : hash[number] = hash[number] + 1;
//         //console.log(hash[number],number);
//         if(hash[number] > max[1]) {
//             max[1] = hash[number]
//             max[0] = number
//         }
//         })
//     return max[0];

//     // write code here
// }
// module.exports = {
//     MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
// };
//进阶方法
// {
//     //     既然该数字占比超过一半，则排序后位于中间位置的一定为该数字
//         numbers.sort((a , b) => a - b)
//         let mid = Math.floor(numbers.length / 2)
//         return numbers[mid]
//     }
//     module.exports = {
//         MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
//     };