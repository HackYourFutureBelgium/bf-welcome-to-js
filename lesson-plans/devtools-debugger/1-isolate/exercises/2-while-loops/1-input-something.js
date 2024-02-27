'use strict';

// let input = null;
// while (input === null) {
//   input = prompt('input something:');
// }

// alert('thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/

// Solution

let input = 20;
message = '';
while (input <= 25) {
  message = 'ops, you get stuck';
}

console.log(message);
