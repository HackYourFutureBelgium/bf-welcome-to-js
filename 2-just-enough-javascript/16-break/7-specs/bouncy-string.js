// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input string of letters to be converted into a bouncy string
    (a bouncy string is one with every other letter uppercase)
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their bouncy string will be displayed


  test cases:
    uppercase strings:
      'ABCDEF' -> 'aBcDeF'
      'JELLO' -> 'jElLo'
    lowercase strings:
      'abcdef' -> 'aBcDeF'
      'jello' -> 'jElLo'
    mixed strings:
      'AbCdEf' -> 'aBcDeF'
      'jElLo' -> 'jElLo'
*/

console.log('--- begin program ---');


/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('Enter a string of letters to convert to a bouncy string');
  if (input === null) {
    continue; // User canceled, prompt again
  }
  if (input.length === 0) {
    continue; // Empty input, prompt again
  }
  let invalidInput = false;
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
      invalidInput = true;
      break; // Invalid input, prompt again
    }
  }
  if (invalidInput) {
    continue; // Invalid input, prompt again
  }
  break; // Valid input, exit the loop
}

console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (i % 2 === 0) {
    output += char.toLowerCase();
  } else {
    output += char.toUpperCase();
  }
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');