/*
  argv
  argv0
  execArgv
  execPath
*/

const {argv, argv0, execArgv, execPath} = process

argv.forEach(item => {
  console.log('item:', item);
});

console.log('argv0:', argv0);
console.log('execArgv:', execArgv);
console.log('execPath:', execPath);

/*
  输出结果：
  $ node --inspect  10.argv.js --test a=1 b=2
  Debugger listening on ws://127.0.0.1:9229/a32f58e7-e1dd-49ce-bf2f-5028af857083
  For help, see: https://nodejs.org/en/docs/inspector
  item: C:\Program Files\nodejs\node.exe
  item: D:\Pinin\project\nodejs\demo\10.argv.js
  item: --test
  item: a=1
  item: b=2
  argv0: C:\Program Files\nodejs\node.exe
  execArgv: [ '--inspect' ]
  execPath: C:\Program Files\nodejs\node.exe
*/
