'use strict';
/* generic

  _a -> input:
    Represents the index position of the character being checked in the user's input string.

  _b -> output:
    Holds the final output value of the program, which is a string containing the valid entries provided by the user.

  _c -> next:
    Controls the program's flow, determining whether to continue looping based on user input and specific conditions.
*/

alert('You will need to enter strings with "e" in the right place');

let input = 0;
let output = 'Entries:';

let next = true;

while (next) {
  let currentInput = prompt('Enter a string with "e" at index ' + input);

  if (currentInput === null) {
    next = !confirm('Are you sure you want to exit?');
  } else if (currentInput[input] === 'e') {
    output += '\n' + input + '. "' + currentInput + '"';
    input++;
  } else {
    output += '\nX. "' + currentInput + '"';
    next = false;
  }
}

alert('Your score: ' + input + '\n\n' + output);