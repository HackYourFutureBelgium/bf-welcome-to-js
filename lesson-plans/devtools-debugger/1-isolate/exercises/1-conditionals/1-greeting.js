'use strict';

// let input = prompt('enter your name:');

// let greeting = '';
// if (input === null) {
//   greeting = 'hello anonymous.';
// } else {
//   greeting = 'hello ' + input + '!';
// }

// alert(greeting);

// /*  ===== Challenges =====
//   - Ask the user for their first and last names.
//   - Greet them with their full name.
// */

let inputFirstName = prompt("Enter first name:");
let inputLastName = prompt("Enter last name:");

let greeting = "";

if (inputFirstName === null || inputLastName === null) {
  greeting = "Hello!"
} else {
  greeting = `Hello ${inputFirstName} ${inputLastName} !`
}

alert(greeting);
