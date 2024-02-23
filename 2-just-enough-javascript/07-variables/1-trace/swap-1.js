// #todo

'use strict';

/* 1. declare 3 variables */

let a = 'y';
let b = 'x';
let temp;

/* 2. swap the values between a and b
  this is done using 3 assignments
*/

temp = a; // temp is assigned the value of a, which is 'y'
console.log(a, b, temp); // 'y', 'x', 'y'
a = b; // a is assigned the value of b, which is 'x'
console.log(a, b, temp); // 'x', 'x', 'y'
b = temp; // b is assigned the value of temp, which is 'y'
console.log(a, b, temp); // 'x', 'y', 'y'

/* 3. compare the final values
  all the comparisons should be true
*/

console.log(a === 'x'); // true
console.log(b === 'y'); // true
console.log(temp === 'y'); // true
