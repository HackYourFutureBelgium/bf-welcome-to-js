'use strict';

/* Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    cat

  Data Out:
   thank you for the cat

  Test Cases:
    cat -> thank you for the cat


  PS. try the "ask me" button!
*/

// Prompt the user to enter "cat" and continue prompting until a non-null value is entered

let input = null;
while (input === null) {
  input = prompt('Please enter "cat":');
}

console.log('input:', input);

// Check if the input is equal to "cat" and assign the appropriate message

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'Thank you for the cat';
}

// Display the message to the user

alert(message);