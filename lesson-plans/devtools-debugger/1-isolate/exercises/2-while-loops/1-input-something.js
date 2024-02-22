'use strict';

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/

let userInput;
while (true) {
  userInput = prompt('input something:');
  console.log(userInput);
}

