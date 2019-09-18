const fs = require('fs')

// 异步地创建目录
fs.mkdir('test', (err) => {
  if (err) throw err;

  console.log('目录创建成功！');
})