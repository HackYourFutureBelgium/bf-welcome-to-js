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
debugger;
let answerInput;
while (!answerInput || answerInput.length !== 10) {
  let answer1 = prompt('enter something with 5 characters');
  let answer2 = prompt('enter again a text with 5 characters');

  if (answer1 && answer2) {
    answerInput = answer1 + answer2;
  } else {
    alert(
      'you need to write a text with 10 characters in both of the prompts !',
    );
  }
}

alert('thanks for the cooperation : ' + answerInput);
