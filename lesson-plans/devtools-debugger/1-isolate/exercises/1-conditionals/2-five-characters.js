'use strict';
let input = '';
input = prompt('Please enter a message');

let message = '';
if (input) {
  message = 'thank you';
}else {
  message = 'Sorry! enter your message please';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
