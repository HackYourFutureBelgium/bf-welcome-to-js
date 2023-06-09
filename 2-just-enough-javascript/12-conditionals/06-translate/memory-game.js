// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// thingToRemember <- prompt('enter some text, then remember it.\n\n' + 'if you remember it correctly you win')

// IF: thingToRemember !== null
/* ---   ?   --- */
//   guess <- prompt('now try to remember what it was:')
//   IF: guess !== null
//     IF: guess === thingToRemember
/* ---   ?   --- */
//       alert('you win!')
//     ELSE:
/* ---   ?   --- */
//       alert('try again.')
//     :END IF
//   :END IF
// :END IF

/* ---   ?   --- */

// alert('good bye')

/*


  Data In:  user input

        
  Data Out: Displayed output
            

  Test Cases:  if input = "preethi" -->  guesses = "preethi". --> Alert displays "You win!".
               if  input =  "12345"-->  guesses "54321".--> Alert displays "Try again.".

               if cancels the first prompt --> No further prompts or alerts are shown.

                if '' --> ''. --> Alert displays "You win!".


*/

/* ---   gather user input   --- */

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win',
);

// Check if the user entered something
if (thingToRemember !== null) {
  /* ---   Prompt the user to guess the remembered text --- */
  let guess = prompt('now try to remember what it was:');

  // Check if the user entered a guess
  if (guess !== null) {
    /* ---   Check if the guess matches the remembered text   --- */
    if (guess === thingToRemember) {
      /* ---   alert user "you win!" if the guess is correct   --- */

      alert('you win!');
    } else {
      /* ---   alert user "try again." if the guess is incorrect  --- */

      alert('try again.');
    }
  }
}
/* ---   alert user with goodbye  --- */

alert('good bye');
