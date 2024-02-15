// #todo

'use strict';

let number = 0;
// let number = 0.5;
// let number = 1;
// let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;
// let number = 3.5;
// let number = 4;
// let number = 4.5;
// let number = 5;
// let number = 5.5;
// let number = 6;

console.log(number + ' between 1 and 2, OR between 4 and 5 (exclusive)');

// number is greater than 1 AND is less than 2 (exclusive)
console.log(number > 1 && number < 2);

// number is greater than 4 AND less than 5 (exclusive)
console.log(number > 4 && number < 5);

// number between 1 and 2 OR between 4 and 5 (exclusive)
console.log((number > 1 && number < 2) || (number > 4 && number < 5));
