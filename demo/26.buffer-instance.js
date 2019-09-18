/*
buf.length
buf.toString()
buf.fill()
buf.equals()
buf.indexOf()
buf.copy()
*/

const buf = Buffer.from('This is a test!')
console.log(buf.length); // buffer 占的字节数 15

const buf2 = Buffer.alloc(10)
buf2[0] = 2
console.log(buf2.length);

const buf3 = Buffer.allocUnsafe(10)
buf3[0] = 2
console.log(buf3.length);

console.log(buf.toString('base64'));

const buf4 = Buffer.allocUnsafe(10)
console.log(buf4);
console.log(buf4.fill(10, 2, 6));


const buf5 = Buffer.from('test')
const buf6 = Buffer.from('test')
const buf7 = Buffer.from('test!')
console.log(buf5.equals(buf6));
console.log(buf5.equals(buf7));

console.log(buf5.indexOf('es'));
console.log(buf5.indexOf('esa'));


