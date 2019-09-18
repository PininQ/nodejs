const fs = require('fs')

fs.rename('./text.txt', 'text.xxx', err => {
  if (err) throw err

  console.log('done!');
})