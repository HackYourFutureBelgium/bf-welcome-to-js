// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can provide input that starts with a capital letter and ends with a period
    - given the user cancels, they will be prompted again
    - given the input is shorter than two characters, they will be prompted again
    - given their input does not begin with a capital letter, they will be prompted again
    - given their input does not end with a period, they will be prompted again
    - given their input is valid, the first letter will be lower-cased and the period removed
    - given their input is valid, the loop will exit

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    two-character input:
      'A.' -> 'a'
      'X.' -> 'x'
    longer words:
      'Hello.' -> 'hello'
      'JavaScript!.' -> 'javaScript!'
    with some spaces:
      'Hello World.' -> 'hello World'
      'Hack your future.' -> 'hack your future'

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let input = null;
let output = '';

/* --- create final output --- */

while (true) {
  input = prompt(
    'Add some text, begin with a capital letter and end with a period',
  );
  if (!input) {
    continue;
  }

  if (input.length < 2 || input[0] !== input[0].toUpperCase() || input[input.length - 1] !== '.') {
    continue;
  }

  output = input.charAt(0).toLowerCase() + input.slice(1, -1);
  break;
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');
