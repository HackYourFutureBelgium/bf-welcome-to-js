'use strict';

/* specific

 _a ->  currentIndex, which represents the index position where the letter "e" is expected in the string.

 _b ->  entries, which holds the string that lists the user's entries.

 _c ->  continueLoop, which indicates whether the loop should continue or not.

 _d ->  userInput, which represents the string entered by the user.

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