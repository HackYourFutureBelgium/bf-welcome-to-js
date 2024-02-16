'use strict';

let input = null;
while (input === null) {
  input = prompt('input something:');
}

alert('thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/
while (true) {
  let userInput = prompt('what is you name:');

  console.log('what is you name:', userInput);
}
