// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input a non-empty string and all characters which are not letters will be removed
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the extra characters will be removed

  test cases:
    only letters:
      'JavaScript' -> 'JavaScript'
      'abc' -> 'abc'
      'heLLO' -> 'heLLO'
    only not-letters:
      '.(-).' -> ''
      '-=>|<=-' -> ''
      '. - ^ - .' -> ''
    mixed letters and not-letters:
      'hello world!' -> 'helloworld'
      'let input = ""' -> 'letinput'
*/

console.log('--- begin program ---');

/* --- gather user input --- */
let output = '';
let input = '';
while (true) {
  input = prompt('Enter a non-empty string:');

  if (!input) {
    continue;
  }

  if (input.trim().length === 0) {
    continue;
  }

  output = input.replace(/[^a-zA-Z]/g, '');
  break;
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

