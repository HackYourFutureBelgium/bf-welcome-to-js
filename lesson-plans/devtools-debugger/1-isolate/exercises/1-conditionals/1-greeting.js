'use strict';

// let input = prompt('enter your name:');

// let greeting = '';
// if (input === null) {
//   greeting = 'hello anonymous.';
// } else {
//   greeting = 'hello ' + input + '!';
// }

// alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
let firstName = prompt('Enter your first name:');
let lastName = prompt('Enter your last name:');

let greeting = '';
if (firstName === null || lastName === null) {
  greeting = 'Hello anonymous.';
} else {
  greeting = 'Hello ' + firstName + ' ' + lastName + '!';
}

alert(greeting);
