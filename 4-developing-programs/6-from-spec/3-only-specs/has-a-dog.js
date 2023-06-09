'use strict';

/* Has a Dog

  A user can input some text and learn if it has "dog" in it (upper or lower case).
    - given the user cancels:
        they are prompted again
    - given their input does not have "dog" (in any case):
        they are told there is no dog
    - given their input does have a "dog" (in any case):
        they are told their input has at least one dog

  test cases:
    contains no dogs:
      ' '           ->   'no dogs'
      'abc'         ->   'no dogs'
      'market'      ->   'no dogs'
    contains at one or more dogs:
      'dog'         ->  'at least one dog'
      'DOG'         ->  'at least one dog'
      'dOg'         ->  'at least one dog'
      'godogo'      ->  'at least one dog'
      'GOdoGO'      ->  'at least one dog'
      'A fast dog.' ->  'at least one dog'
*/


/* --- gather user input --- */
let input = null;

while (!input) {
  input = prompt("Enter some text:");

  if (input === null) {
    alert("cancelled :(");
    continue;
  }

  if (input === '') {
    alert("you didn't enter anything");
    continue;
  }
}

/* --- check if the input has "dog" in it (case-insensitive) --- */

const lowerCaseInput = input.toLowerCase();
let message;

if (lowerCaseInput.includes('dog')) {
  message = 'at least one dog';
} else {
  message = 'no dogs';
}


/* --- display the dogified text to the user --- */

console.log (message);

alert(message);