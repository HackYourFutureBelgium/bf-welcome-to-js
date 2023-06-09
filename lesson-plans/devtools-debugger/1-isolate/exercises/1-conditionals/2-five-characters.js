'use strict';

let characters = 'default value';

let message = '';
if (characters === null) {
  message = ':(';
} else if (characters.length < 5) {
  message = 'too short';
} else if (characters.length === 5) {
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
