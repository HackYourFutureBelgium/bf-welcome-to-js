'use strict';

/* specific

  _d ->  currentIndex, which represents the index position where the letter "e" is expected in the string.

  _b ->  entries and holds the final output value of the program, which is a string containing the valid entries provided by the user.

  _c -> continueLoop and controls the program's flow, determining whether to continue looping based on user input and specific conditions.

*/

alert('you will need to enter strings with "e" in the right place');

let currentIndex = 0;

let entries = 'entries:';

let continueLoop = true;
while (continueLoop) {
  let userInput = prompt('_d a string with "e" at index ' + currentIndex);

  if (userInput === null) {
    continueLoop = !confirm('are you sure you want to exit?');
  } else if (userInput[currentIndex] === 'e') {
    entries = entries + '\n' + currentIndex + '. "' + userInput + '"';
    currentIndex = currentIndex + 1;
  } else {
    entries = entries + '\nx. "' + userInput + '"';
    continueLoop = false;
  }
}

alert('your score: ' + currentIndex + '\n\n' + entries);
