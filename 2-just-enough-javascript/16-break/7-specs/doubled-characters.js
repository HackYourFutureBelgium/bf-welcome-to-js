// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input string of letters (upper or lower case), each letter will be doubled
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and the letters of their input will be doubled


  test cases:
    no doubled letters:
      'ABC' -> 'AABBCC'
      'abc' -> 'aabbcc'
      'AbC' -> 'AAbbCC'
    some doubled letters:
      'abbcc' -> 'aabbbbcccc'
      'jello' -> 'jjeelllloo'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
while (true) {
  const userInput = prompt('Please enter something');

  if(userInput === null){
    alert('no escape');
    continue;
  }
  if (userInput === '') {
    alert('Invalid input. Please enter a something.');
    continue;
  }
  if (!/^[a-zA-Z]+$/.test(userInput)) {
    alert('Invalid input. Please enter letters only.');
    continue;
  }

  input = userInput;
  break;
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let i = 0; i < input.length; i++) {
  const letter = input[i];
  output += letter + letter;
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---')


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
