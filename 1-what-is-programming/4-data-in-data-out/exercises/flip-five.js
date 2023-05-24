'use strict';

/* Flip Five

  Data In:
      any text 5 characters long

  Data Out:
      message: text that was writteb before but mirrored

  Test Cases:
      result:
      12345 -> 54321
      sunny -> ynnus

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
    alert('nope, try again.');
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
