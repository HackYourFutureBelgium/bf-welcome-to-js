import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:chrome

  name: reference error
  message: Display string is not defined

  location: 46

  life cycle:Exceutionphase

  the mistake: Display string is not camelcase

  the fix(es):  used camelcase i.e.., used lower case first
*/

whenFormDataChanges('sleep-info', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let isTired = readBoolean('tired');

  let hasTime = readBoolean('free-time');

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

  // --- display the advice ---

  displayString('advice-area', advice); // DisplayString('advice-area', advice);
});
