'use strict';

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

let input1 = prompt('Enter your first name:');

let input2 = prompt('Enter your last name:');

let greetings = '';
if (input1 && input2) {
  greetings = `Nice to meet you ${input1} ${input2} !`;
} else {
  greetings = 'Nice to meet you invisible. ';
}

alert(greetings);
