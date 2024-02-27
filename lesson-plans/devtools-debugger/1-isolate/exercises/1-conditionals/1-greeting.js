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

// Solution

let firstName = 'Daria';
let lastName = 'Spodina';
let greeting = '';

if (firstName && lastName !== null) {
  greeting = `Hello ${firstName} ${lastName}!`;
} else {
  greeting = 'Hello stranger';
}

console.log(greeting);
