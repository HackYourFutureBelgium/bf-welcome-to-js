// #todo

'use strict';

let a = 'bye';
let b = 'hi';
let temp;

temp = a; // bye
a = b; // hi
b = temp; // bye

console.log('a:', a); // hi
console.log('b:', b); // bye
console.log('temp:', temp); // bye
