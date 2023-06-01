// #todo

'use strict';

/* Challenge: write this program using `break` and `continue`

  a user can provide input that contains only uppercase and lowercase letters
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input with only letters:
      'abcdABCD' -> 'abcdABCD'
      'JAVAscript' -> 'JAVAscript'
      'hi' -> 'hi'

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';
let input = null;
const letters = /^[A-Za-z]+$/;

/* --- create final output --- */

while (!input) {
  input = prompt('Type letters');
  if (input == null) {
    alert('canceled')
    continue;
  } else if (input == '') {
    alert('the input is empty')
    continue;
  } else if (!letters.test(input)) {
    alert('input contains anything that is not a letter')
    input = null
    continue;
  } else {
    output += input;
  }
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');
