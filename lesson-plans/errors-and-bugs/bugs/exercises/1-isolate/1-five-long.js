'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line:
    why:
    trying:

*/

let userInput = prompt('enter something 5 characters long');

if (!userInput) {
  alert(':(');
} else if (userInput.length < 5) {
  alert('too short');
} else if (userInput.length > 5) {
  alert('too long');
} else {
  alert('perfect!');
}
