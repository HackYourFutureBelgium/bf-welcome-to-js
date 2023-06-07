// #todo

'use strict';

/*
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
      'jElLo' -> jElLo'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
while (true) {
  const input = prompt('Please enter something');
  console.log('input:', input);
}

/* --- declare initial output --- */

let output = '';
let isUpperCase = true;
let spcial = ' 0123456789!?.&*$#';

/* --- create final output --- */

for (let char of output) {
  if (spcial.indexOf(char) === -1) {
    if (isUpperCase) {
      output += char.toUpperCase();
      isUpperCase = false;
    } else {
      output += char.toLowerCase();
      isUpperCase = true;
    }
  } else {
    output += char;
  }
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