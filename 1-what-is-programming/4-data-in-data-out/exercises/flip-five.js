'use strict';

/* Flip Five

  This program accepts string or numbers that are exactly 5 characters and revers entered data.

  Data In:
  Any numbers or text 5 characters long.

  Data Out:

  A friendly message:
  "Enter something with 5 characters and it will be reversed" or "nope, try again".
  
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
