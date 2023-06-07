// #todo

'use strict';

/* Challenge: write this program using `break` and `continue`

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

let output = '';

/* --- create final output --- */

while (true) {
  const input = prompt(
    'Please enter input that starts with a capital letter and ends with a period',
  );

  if (input) {
    if (input.length < 2) {
      continue;
    } else if (input[0] !== input[0].toUpperCase()) {
      continue;
    } else if (input[input.length - 1] !== '.') {
      continue;
    } else {
      output = input;
      break;
    }
  } else {
    continue;
  }
}

let newOutput = '';

for (let i = 0; i < output.length; i++) {
  // make the first char lower case
  if (i === 0) {
    newOutput += output[i].toLowerCase();
  } else if (i === output.length - 1) {
    // don't add it to the newOutput
  } else {
    // just add the char
    newOutput += output[i];
  }
}

/* --- alert the result --- */

console.log('output:', newOutput);
alert(newOutput);

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