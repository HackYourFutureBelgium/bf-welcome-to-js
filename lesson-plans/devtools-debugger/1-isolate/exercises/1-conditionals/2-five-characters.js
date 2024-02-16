'use strict';

let input = prompt('enter something with 5 characters:');

let message = '';
if (input === null) {
  message = ':(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} else {
  message = 'too long';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

let input = 'default value';
let input = prompt('Please provide your input.');
input = 'thank you!';

let message = '';
if (input === null) {
  // User clicked Cancel
  message = 'You did not provide any input.';
} else if (input === '') {
  // User entered an empty string
  message = 'You provided an empty input.';
} else {
  // User provided input other than 'thank you!'
  message = 'Thank you for your input!';
}

// Display the message
alert(message);
