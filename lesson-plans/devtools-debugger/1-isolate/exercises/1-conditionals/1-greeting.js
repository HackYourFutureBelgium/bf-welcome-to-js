'use strict';

debugger;

let firstName = prompt('enter your first name:');
let lastName = prompt('enter your last name:')

let greeting = '';
if (firstName === null && lastName === null) {
  greeting = 'hello anonymous.';
} else {
  if (firstName === null) {
    firstName = '';
  }
  if (lastName === null) {
    lastName = '';
  }
  greeting = 'hello ' + (firstName + ' ' + lastName).trim() + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
