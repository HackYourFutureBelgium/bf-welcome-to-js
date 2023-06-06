// #todo

'use strict';

// a <- 'y'

// b <- 'x'

// temp <- a

// a <- b

// b <- temp

// a <- 'y'


/* 1. declare 3 variables */

let a = 'y';
let b = 'x';
let temp;

/* 2. swap the values between a and b
  this is done using 3 assignments
*/

temp = a;
console.log(a, b, temp); // y, x, y
a = b;
console.log(a, b, temp); // x, x, y
b = temp;
console.log(a, b, temp); // y, x, x

