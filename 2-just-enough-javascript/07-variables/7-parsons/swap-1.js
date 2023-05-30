// #todo

'use strict';

/* 1. declare 3 variables */

/*let a = 'y';
let b = 'x';
let temp;*/

/* 2. swap the values between a and b */

/* parsons-collapse: hint
  1. read the value from 'a' and assign it to 'temp'
  2. read the value from 'b' and assign it to 'a'
  3. read the value from 'temp' and assign it to 'b'
*/

/*temp = a;
a = b;
b = temp;*/

/* 3. compare the final values */

/*console.log(a === 'x');
console.log(b === 'y');
console.log(temp === 'y');*/

/* ------------- */

let a = 'x'; // distractor
let b = 'y'; // distractor
let temp;
// read a variable a
// declare a variable temp and initialize it to the value a
temp = a;
// read the variable b
// declare a variable a and initialize it to the value b
a = b;
// read the variable temp
// declare a variable b and initialize it to the value temp
b = temp;

console.log(a === 'y');
console.log(b === 'x');
console.log(temp === 'x');
