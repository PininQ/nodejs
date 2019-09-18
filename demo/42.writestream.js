const fs = require('fs')

const ws = fs.createWriteStream('./test.txt')

const tid = setInterval(() => {
  const num = parseInt(Math.random() * 50)

  console.log(num);
  if (num < 25) {
    ws.write(num + '\n')
  } else {
    clearInterval(tid)
    ws.end()
  }
}, 200)

// 写完之后有一个 finish 事件
ws.on('finish', () => {
  console.log('done!');
})
