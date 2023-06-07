'use strict';

/* Challenge: write this program using `break` and `continue`

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
  input = prompt('Please enter a non-empty string to reverse:');
  
  if (input === null) {
    alert('You canceled. Please try again.');
    continue; // User canceled, prompt again
  }
  
  if (input === '') {
    alert('Input is empty. Please enter a non-empty string.');
    continue; // Input is empty, prompt again
  }
  
  break; // Valid input, exit the loop
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let i = input.length - 1; i >= 0; i--) {
  output += input[i];
}

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