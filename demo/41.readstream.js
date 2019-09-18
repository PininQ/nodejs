const fs = require('fs')

const rs = fs.createReadStream('./41.readstream.js')

// 输出到控制台
rs.pipe(process.stdout)
