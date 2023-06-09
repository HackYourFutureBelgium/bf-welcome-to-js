// #todo

'use strict';
console.log('-- begin --');

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

// declare a variable named furniture and assign it the value 'chair'
let furniture = 'chair';
console.log(furniture); // Output: chair

// declare a variable named building and assign it the value 'house'
const building = 'house';
console.log(building); // Output: house

furniture = 'table';
console.log(furniture); // Output: table

// declare a variable named food without assigning a value
let food;
console.log(food); // Output: undefined

food = 'apple';
console.log(food); // Output: apple

console.log(building); // Output: house

console.log(furniture); // Output: table

food = 'pear';
console.log(food); // Output: pear

console.log('-- end --');
