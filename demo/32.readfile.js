const fs = require('fs')

fs.readFile('./32.readfile.js', 'utf8', (err, data) => {
  if (err) throw err

  // data 是一个 Buffer 对象
  console.log(data);
})

// 同步的操作，同步先于异步的操作执行，
var data = fs.readFileSync('./01.run.js', 'utf8')
console.log(data);
