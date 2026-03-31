var a = 1;
var b = 9;
console.log("Sum = " + (a + b));

// sprint text with color
const pass = (text) => `\x1b[32m${text}\x1b[0m`;
const fail = (text) => `\x1b[31m${text}\x1b[0m`;
console.log(pass('pass'));
console.log(fail('fail'));

console.log('\x1b[32m%s\x1b[0m', 'pass');  // green
console.log('\x1b[31m%s\x1b[0m', 'fail');  // red


var colors = require('colors');

console.log('hello'.gray); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass