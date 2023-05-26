// #todo

'use strict';

let a = 'y';
let b = 'x';
let temp;

temp = b; // x
b = a; // y
a = temp; // x

console.log('a:', a); // x
console.log('b:', b); // y
console.log('temp:', temp); // x
