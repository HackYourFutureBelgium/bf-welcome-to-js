'use strict';

let firstInput = null;
let secondInput = null;
while (firstInput === null || secondInput.length === null) {
  firstInput = prompt('enter first part of everything');
  secondInput = prompt('enter second part of everything');
} 
let message = 'thank you for "' + firstInput + secondInput + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
