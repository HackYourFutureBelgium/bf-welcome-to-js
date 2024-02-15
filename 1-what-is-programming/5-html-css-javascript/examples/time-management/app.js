import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../lib/dom-io/index.js';
debugger;
whenFormDataChanges('sleep-info', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user input ---

  // read a boolean from the <input> with id "tired"
  let isTired = readBoolean('tired');
  console.log('tired:', isTired);

  // read a boolean from the <input> with id "free-time"
  let hasTime = readBoolean('free-time');
  console.log('time:', hasTime);

  // --- generate advice ---

  let advice = '';
  if (isTired && hasTime) {
    advice = 'Take a nap!';
  } else if (!isTired && hasTime) {
    advice = 'Study some flashcards.';
  } else if (isTired && !hasTime) {
    advice = 'Make some coffee.';
  } else if (!isTired && !hasTime) {
    advice = 'Have a great day!';
  }

  console.log(advice);

  // --- display the advice ---

  // display a string to the <pre> with id "advice-area"
  displayString('advice-area', advice);
});
