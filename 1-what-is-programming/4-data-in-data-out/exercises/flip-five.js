'use strict';

debugger;

/* Flip Five

  Data In:
  any text


  Data Out:
  the reversed input if it was 5 characters long
  else it will prompt the user for another input


  Test Cases:
  'hey' -> 'nope, try again.'
  'celia' -> 'ailec'
  'vacation' -> 'nope, try again.'


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
