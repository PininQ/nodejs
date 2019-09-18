const mod = require('./09.global')

console.log(mod.testVar);

// 报错 ReferenceError: testVar is not defined
// console.log(testVar);

// 全局变量
console.log(testVar2);