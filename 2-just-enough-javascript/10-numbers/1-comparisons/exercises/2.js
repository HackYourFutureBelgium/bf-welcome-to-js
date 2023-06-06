// #todo

'use strict';

let number = 0; // The number variable is assigned to the value 0.
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

console.log(number + ' between 1 and 2, OR between 4 and 5 (inclusive)'); //reads the value of number along with the string ' between 1 and 2, OR between 4 and 5 (inclusive)'

//reading statements to check various conditions and output true or false based on the comparisons

// number is greater than or equal to 1 AND is less than or equal to 2 (inclusive)
console.log(number >= 1 && number <= 2);

// number is greater than or equal to 4 AND is less than or equal to 5 (inclusive)
console.log(number >= 4 && number <= 5);

// number between 1 and 2 OR between 4 and 5 (inclusive)
console.log((number >= 1 && number <= 2)(number >= 4 && number <= 5));

//number is assigned to  0 in this case, none of the conditions will evaluate to true.
