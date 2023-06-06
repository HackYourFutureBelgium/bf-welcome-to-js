'use strict';

let partOne;
let partTwo;
let message;

while (true) {
  partOne = prompt('Please enter somthing ');
  partTwo = prompt('Please enter somthing ');

  message = partOne + partTwo;

  if (message.length === 10) {
    alert('Thank you :)');
    break;
  } else {
    alert('Please ennter only 10 characters for both times');
  }
}

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
