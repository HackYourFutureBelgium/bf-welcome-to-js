'use strict';

// let input = prompt('enter something with 5 characters:');

// let message = '';
// if (input === null) {
//   message = ':(';
// } else if (input.length < 5) {
//   message = 'too short';
// } else if (input.length === 5) {
//   message = 'thank you!';
// } else {
//   message = 'too long';
// }

// alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

// Solution

let input = ['dogs', 'cats'];
let inputQuestion = prompt('Do you prefer cats or dogs?');
let message = '';
input = inputQuestion;

/* 26 and 29 lines are unnecessary.
I added extra code just to follow the task
and initialize the input value before asking for the user input.
*/

if (input === 'dogs') {
  message =
    'The world would be a nicer place if everyone had the ability to love as unconditionally as a dog';
} else if (input === 'cats') {
  message = 'Cats leave paw prints on your heart';
} else {
  message = 'Make your choice!';
}

console.log(message);
