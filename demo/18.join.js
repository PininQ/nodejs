const {join} = require('path')

// 将路径进行拼接，会调用 normalize
console.log(join('/usr', 'local', 'bin/'));
console.log(join('/usr', '../local', 'bin/'));