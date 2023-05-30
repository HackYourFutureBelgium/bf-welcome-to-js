'use strict';

/*let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);*/

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

let inputFirstName = prompt('enter your first name:');
let inputLastName = prompt('enter your last name:');
let greeting = '';
if (inputFirstName === null) {
  greeting = 'hello anonymous.';
}  else {
  greeting = 'hello ' + inputFirstName + ' ' + inputLastName + '!';
}

alert(greeting);