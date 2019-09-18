const path = require('path')

const mod = require('./02.cusmod')
console.log(mod.testVar);

// __dirname、__filename 总是返回文件的绝对路径
console.log('__dirname    ', __dirname);

// process.cwd() 总是返回执行 node 命令所在文件夹
console.log('process.cwd()', process.cwd());

// 在 require 方法中总是相对当前文件所在文件夹
// 在其它地方和 process,cwd() 一样，相对 node 启动所在文件夹
console.log('./           ', path.resolve('./'));
