'use strict';

debugger;

let input = '';
while (input.length !== 10) {
  const part1 = prompt('enter the first 5 characters:');
  const part2 = prompt('enter the next 5 characters:');

  input = part1 + part2;
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
