// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input a non-empty string and it will be reversed
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the reversed input will be displayed

  test cases:
    'hello' -> 'olleh'
    'p' -> 'p'
    'JavaScript' -> 'tpircSavaJ'

*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
while (true) {
  const userInput = prompt('Please enter something');

  if (userInput === null) {
    alert('noescape.');
    continue;
  }

  if (userInput === '') {
    alert('Invalid input. Please enter something.');
    continue;
  }

  input = userInput;
  break;
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let char of input) {
  if (/[a-zA-Z]/.test(char)) {
    output += char;
  }
}
output += '|' + output.split('').reverse().join('');

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');


/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
