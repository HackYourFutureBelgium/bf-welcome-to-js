'use strict';

/*
  Data In: user input

  Data Out:
  - if the user cancer the message shows 'you canceled'
  - if the user enter less than 4 character its shows 'enter something longer than 4 characters, or "cancel" to leave'
  - if the user enter more than 4 character, it will display the message

  Test Cases:
  - press 'cancel' --> 'you canceled'
  - hi --> 'enter something longer than 4 characters, or "cancel" to leave'
  - hello --> hello
*/
let input = '';
let prompting = true;
while (prompting) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input.length > 4) {
    prompting = false;
  }
}
alert(input);

