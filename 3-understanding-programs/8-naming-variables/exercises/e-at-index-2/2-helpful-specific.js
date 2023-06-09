'use strict';

/* specific

  _a -> currentIndex:
     it keeps track of the current index being processed in the input string

  _b -> entries:
   it stores the string representation of the entered values, separated by indexes

  _c -> inputValue:
    it represents the user input obtained from the prompt

  _d ->cancelConfirmation:
     it stores the result of the confirmation prompt for canceling the input process

*/

alert('you will need to enter strings with "e" in the right place');

let currentIndex = 0;

let entries = 'entries:';

while (true) {
  let inputValue = prompt('input a string with "e" at index ' + currentIndex);

  if (inputValue === null) {
    let cancelConfirmation = confirm('are you sure you want to cancel?');
    if (cancelConfirmation) {
      break;
    } else {
      continue;
    }
  }

  if (inputValue[currentIndex] !== 'e') {
    entries = entries + '\nx. "' + inputValue + '"';
    break;
  }

  entries = entries + '\n' + currentIndex + '. "' + inputValue + '"';
  currentIndex = currentIndex + 1;
}

alert('your score: ' + currentIndex + '\n\n' + entries);

