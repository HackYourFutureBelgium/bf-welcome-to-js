/*
'use strict';

debugger;

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting); */

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

const firstName = prompt('Input your first name: ');
const lastName = prompt('Input your last name: ');

let message = '';

if (firstName && lastName) {
  message = `hello ${firstName} ${lastName}!`;
} else {
  prompt('Input your first name: ');
  prompt('Input your last name: ');
}

alert(message);
