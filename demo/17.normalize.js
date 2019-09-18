// 将路径改成标准的路径

const {normalize} = require('path')
// const normalize = require('path').normalize

console.log(normalize('/usr/local/bin'));
console.log(normalize('/usr//local/../bin'));
