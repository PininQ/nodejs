const fs = require('fs')

const result = fs.readFile('./05.main.js', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
})

console.log(result);