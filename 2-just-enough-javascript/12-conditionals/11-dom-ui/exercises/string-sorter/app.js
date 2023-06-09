import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let stringA = readString('string-a');

  let stringB = readString('string-b');

  // --- sort them input by length ---
  let sorted = '';

  if (stringB.length < stringA.length) {
    sorted = stringB + ', ' + stringA;
  } else if (stringB.length > stringA.length) {
    sorted = stringA + ', ' + stringB;
  } else {
    sorted = stringA + '\n' + stringB;
  }

  // --- display the sorted strings ---

  displayString('sorted', sorted);
});
