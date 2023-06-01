// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can provide input that is 10 characters long
    - given they cancel, a message is displayed and they are prompted again
    - given the input is too short, they are told how much too short and prompted again
    - given the input is too long, they are told how much too long and prompted again
    - given the input is 10 characters, the loop will exit and the input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input of 10 characters
      'javascript' -> 'javascript'
      '0123456789' -> '0123456789'
      'a b c d e ' -> 'a b c d e '

*/

console.log('--- begin program ---');

let input = null;

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

while (!input) {
  input = prompt('Type 10 characters');
  if (input.length < 10) {
    alert(
      'The input is too short, it shpuld be 10 character length. Try again!',
    );
    input = null;
    continue;
  } else if (input.length > 10) {
    alert(
      'The input is too long, it shpuld be 10 character length. Try again!',
    );
    input = null;
    continue;
  } else {
    alert('The input is 10 characters length. Good job!');
    output += input;
    break;
  }
}
/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');
