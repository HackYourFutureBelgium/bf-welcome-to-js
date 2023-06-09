'use strict';

/* Has Spaces

  A user can input any text and they will be told if it has a space or not.
    - given the user cancels:
        they will be prompted again
    - given their input contains at least one space:
        they will be told so
    - given their input does not have any spaces:
        they will be told so

  test cases:
    contains no spaces:
      ''            ->  '"" has no spaces'
      'abc'         ->  '"abc" has no spaces'
      'hello'       ->  '"hello" has no spaces'
      'JavaScript'  ->  '"JavaScript" has no spaces'
    contains 1 space:
      ' '           ->  '" " has at least one space'
      ' abc'        ->  '" abc" has at least one space'
      'hello !'     ->  '"hello !" has at least one space'
      'Java Script' ->  '"Java Script" has at least one space'
    contains more than 1 space:
      '  '            ->  '"  " has at least one space'
      ' a b c '       ->  '" a b c " has at least one space'
      ' h e l l o ! ' ->  '" h e l l o ! " has at least one space'
      ' Java Script ' ->  '" Java Script " has at least one space'

*/

/* --- gather user input, any text will do --- */

let userInput;
do {
  userInput = prompt('Please enter some text:');
} while (userInput === null);

//  Data After:   the first string provided by the user

/* --- declare a variable with the character(s) to search for --- */

const searchCharacter = ' ';

// Data After:    a string with the character(s) to search for

/* --- check if the character(s) exist in the string --- */

let hasSpaces = false;
for (const char of userInput) {
  if (char === searchCharacter) {
    hasSpaces = true;
    break;
  }
}
// Data After:    a boolean value
//                true if the input contained at least one space
//                false if the input had no spaces

/* --- create a message for the user --- */

let message;
if (hasSpaces) {
  message = '"' + userInput + '" has at least one space';
} else {
  message = '"' + userInput + '" has no spaces';
}
// Data After:  a message saying if there were any spaces in the text

/* --- display the message for the user --- */

alert(message);

// Data Out:    a final message for the user
