'use strict';

/* Flip Five

   Data In:
    any text

  Data Out:
    the reversed input if it was 5 characters long
    the unchanged input if it was not 5 characters long

  Test Cases:
    '' -> ''
    'xyz' -> 'zyx'
    'water' -> 'retaw'
    'Alexander' -> 'Alexander'


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('wrong, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);