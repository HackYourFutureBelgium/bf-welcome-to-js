'use strict';

// let input = null;
// while (input === null || input.length !== 5) {
//   input = prompt('enter something with 5 characters:');
// }

// let message = 'thank you for "' + input + '"!';

// alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let input = null;
while (input === null || input.length !== 10) {
  input = prompt('enter something with 10 characters:');
}

let message = 'thank you for "' + input + '"!';
alert('Please write "everything" in two steps.');
input = prompt('Enter "every":');
input += prompt('Enter "thing":');

alert(message);
