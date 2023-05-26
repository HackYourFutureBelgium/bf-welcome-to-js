'use strict';

let input = null;
while (input === null || input.length !== 10) {
  let input1 = prompt('enter something with 5 characters:');
  let input2 = prompt('enter something with 5 characters:');
  input = input1 + input2
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
