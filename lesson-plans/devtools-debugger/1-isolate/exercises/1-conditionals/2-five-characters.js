'use strict';

// let input = prompt('enter something with 5 characters:');

// let message = '';
// if (input === null) {
//   message = ':(';
// } else if (input.length < 5) {
//   message = 'too short';
// } else if (input.length === 5) {
//   message = 'thank you!';
// } else {
//   message = 'too long';
// }

// alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

let userInput = '';
userInput = prompt('enter something with 5 characters:');
let info = '';

// info = 'thank you'; // always show thank you
if (userInput.length > 5) {
  info = 'too long';
} else if (userInput.length < 5) {
  info = 'too short';
} else if (userInput.length === 5) {
  info = 'perfect!';
} else {
  info = ':('; // this will never executed
}

alert(info);

