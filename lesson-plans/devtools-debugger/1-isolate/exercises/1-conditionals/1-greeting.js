'use strict';

// eslint-disable-next-line no-debugger
debugger;

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
  - Greet them with their full name.
*/

let firstname = prompt('enter your name:');

let lastname = prompt('enter your last name:');

let message = '';

if (firstname !== null && lastname !== null) {
  message = 'hello ' + firstname + ' ' + lastname;
} else {
  message = 'firstname/lastname not provided';
}
alert(message);
