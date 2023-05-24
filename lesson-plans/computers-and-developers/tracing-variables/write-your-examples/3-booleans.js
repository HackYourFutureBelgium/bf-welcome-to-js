'use strict';

/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

// declare a variable age and initialize it to the value 15
let age = 15;

//read the variable age with value 15
//check the conditions, else if (age < 20) is true
//read the variable age with value 'You are a teenager'
if (age < 20) {
  console.log('You are a teenager');
} else {
  console.log('You are an adult');
}

// declare a variable number and initialize it to the value 2
let number = 2;


//read the variable number with value 2
//check the condition while (number < 2 * 3), true
//read the variable number with value 2
//assign the variable number to the value 4

//read the variable number with value 4
//check the condition while (number < 2 * 3), true
//read the variable number with value 4
//assign the variable number to the value 6

//read the variable number with value 6
//check the condition while (number < 2 * 3), false
while (number < 2 * 3) {
  number = number + 2;
}

//read the variable number with value 6
console.log(number)