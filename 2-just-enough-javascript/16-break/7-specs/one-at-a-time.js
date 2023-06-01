// #todo

'use strict';

/*
  a user can add single characters to a string until they confirm they have finished
    - given they cancel, they see a helpful message and are prompted again
    - given the input is empty, they see a helpful message and are prompted again
    - given the input is longer than 1 character, they see a helpful message and are prompted again
    - given the input is a single character, the input is appended to the output
    - given the user confirms the output is complete, the loop will end and the output is displayed

  no test cases!
    this program cannot be tested by input/output pairs
    because the user can decide when to stop there are no certain test cases

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let input = '';
let output = '';

while (true) {
  let input = prompt(
    'Type a single character',
  );

  if (input === null) {
    console.log('Cancelled. Please try again.');
    continue;
  }

  if (input.length == 0) {
    console.log('The input is empty. Please try again.');
    continue;
  }

  if (input.length > 1) {
    console.log('The input is longer than 1 character. Please try again.');
    continue;
  }

  output += input;

  let confirmation = confirm(
    `The current output is: ${output}\nDo you want to finish?`,
  );

  if (confirmation) {
    break;
  }
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');
