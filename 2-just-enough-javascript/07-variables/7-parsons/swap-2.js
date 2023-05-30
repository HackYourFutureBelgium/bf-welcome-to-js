// #todo

'use strict';

/* 1. declare 3 variables */

/*let a = 'y';
let b = 'x';
let temp;*/

/* 2. swap the values between a and b */

/* parsons-collapse: hint
  1. read the value from 'b' and assign it to 'temp'
  2. read the value from 'a' and assign it to 'b'
  3. read the value from 'temp' and assign it to 'a'
*/

/*temp = b;
b = a;
a = temp;*/

/* 3. compare the final values */

/*console.log(a === 'x');
console.log(b === 'y');
console.log(temp === 'x');*/

/* -------------- */
let a = 'y';
let b = 'x';
let temp;
// read a variable b
// declare a variable temp and initialize it to the value a 
temp = a;
// read a variable a
// declare a variable b and initialize it to the value a
b = a;
// read a variable temp
// declare a variable a and initialize it to the value temp
a = temp;

console.log(temp === b);
console.log(b === a);
console.log(a === temp);

