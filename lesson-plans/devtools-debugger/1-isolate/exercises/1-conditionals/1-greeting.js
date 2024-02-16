'use strict';

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  let input = prompt('enter your name:');
  - Greet them with their full name.
*/

// Ask the user for their first and last names.

let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');

// Concatenate the first and last names to form the full name
let fullName = firstName + ' ' + lastName;

// Greet them with their full name.
alert('Hello ,' + fullName + '! welcome');
