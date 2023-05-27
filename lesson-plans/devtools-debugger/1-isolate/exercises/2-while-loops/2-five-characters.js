'use strict';

/* let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let firstInput = null;
let secondInput = null;
while (firstInput === null || secondInput.length === null) {
  firstInput = prompt('enter first part of everything');
  secondInput = prompt('enter second part of everything');
} 
let message = 'thank you for "' + firstInput + secondInput + '"!';

alert(message);