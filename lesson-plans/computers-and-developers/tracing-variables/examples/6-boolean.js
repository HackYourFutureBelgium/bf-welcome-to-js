'use strict';

/* Booleans

  1- booleans are a data type used to work with true or false( yes or no)

  2- it can have only two values : true or false

  3- booleans are very useful in comparisons and conditions
*/

// declare a variable age and initialize it to the value '15'
let age = 15;

//read the variable age with value '15'
//check the conditions, else if (age < 18) is true
//read the message 'You are a teenager'
// assign the variable age to the value 'You are a teenager'
if (age < 18) {
  console.log('You are a teenager');
  age = 'You are a teenager'
} else {
  console.log('You are an adult');
  age = 'You are an adult'
}

// declare a variable age2 and initialize it to the value '20'
let age2 = 20;

//read the variable age2 with value '20'
//check the conditions, else if (age < 18) is false
//read the message 'You are an adult'
if (age2 < 18) {
  console.log('You are a teenager');
} else {
  console.log('You are an adult');
}