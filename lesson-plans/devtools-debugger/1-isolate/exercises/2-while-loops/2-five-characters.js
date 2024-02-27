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

// Solution

let input = prompt('enter word: every');
let input1 = prompt('enter thing: thing');
let everything = input + input1;
let message = '';
while (everything !== null && everything.length === 10) {
  message = `Thank you for ${everything}`;
  break;
}

console.log(message);
