/* 最慢，该函数在 global 中，传入一个函数，让它等下一个事件队列再调用 */
setImmediate(() => {
  console.log('setImmediate');
})

setTimeout(() => {
  console.log('setTimeout');
}, 0)

/* 最快，
nextTick 把插入的 function 放在当前事件队列的最后，
而 setImmediate 把插入的 function 放入上一个队列的队首，
setTimeout 放在它们两个的中间，
一般使用 setImmediate 即可，在异步 IO 操作之前做一些事情可以使用 nextTick */
process.nextTick(() => {
  console.log('nextTick');
  
  process.nextTick(() => {
    console.log('nextTick');
  })
})