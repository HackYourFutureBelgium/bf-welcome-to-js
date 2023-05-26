'use strict';

let input;
input = prompt('enter something with 5 characters:');

let message = '';
if (input === null) {
  message = 'You canceled!';
} else {
  message = 'thank you!';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
