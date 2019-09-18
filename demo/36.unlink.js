const fs = require('fs')

// 异步地删除文件或符号链接。 
fs.unlink('./text.xxx', (err) => {
  if (err) throw err;
  console.log('文件已删除');
})