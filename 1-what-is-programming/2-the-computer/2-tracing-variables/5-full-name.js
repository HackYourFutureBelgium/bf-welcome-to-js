'use strict';

/*
  comment and uncomment different names
  how will the program change?

  practice tracing it different ways:
  - use "variables" to check how each variable is used
  - open the code in JS Tutor and step through the program
  - use the "trace" button and read the console output
  - fill out a trace table based on the console output
  - use "highlight" to trace the code by drawing on it

  looking for a challenge? Try the "debug" button

*/


// declaire the variable first and initialize it to a value of 'Pieter'
let first = 'Pieter';

// declaire the variable last and initialize it to a value of 'Rabbit'
let last = 'Rabbit';

// declaire the variable fullName and initialize it to a value of 'Pieter' + ' ' + 'Rabbit'
// read the variables first and  last
let fullName = first + ' ' + last;

// declaire the variable greeting and initialize it to a value of 'hello' + 'Pieter' + ' ' + 'Rabbit'
// read the variable fullName
let greeting = 'hello ' + fullName;
console.log(greeting);
// assign the variable greeting to 'good bye' + fullName
// read the variable fullName
greeting = 'good bye ' + fullName;
console.log(greeting);
