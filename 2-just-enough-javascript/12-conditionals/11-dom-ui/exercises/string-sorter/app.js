import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let a = readString('string-a');
  let b = readString('string-b');

  let sorted = '';
  if (a.length > b.length) {
    sorted = b + ', ' + a;
  } else if (b.length > a.length) {
    sorted = a + ', ' + b;
  } else {
    sorted = a + '\n' + b;
  }

  // --- sort them input by length ---

  // --- display the sorted strings ---

  displayString('sorted', sorted);
});
