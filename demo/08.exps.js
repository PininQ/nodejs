// exports 相当于 module.exports 的一个快捷方式
// const exports = modules.exports

// (
//   function (exports, require, module, __filename, __dirname) {
//     // code
//   }
// )

// 直接输出 test 变量
// exports.test = 100

// 这种方式相当于改变了 exports 的指向，和 module.exports 没有任何关系
// 指向该对象
/*
{
  a: 1,
  b: 2,
  test: 100
}
*/
// 注意：不能改变 exports 的指向
/* exports = {
  a: 1,
  b: 2,
  test: 100
} */

module.exports = {
  a: 1,
  b: 2,
  test: 100
}