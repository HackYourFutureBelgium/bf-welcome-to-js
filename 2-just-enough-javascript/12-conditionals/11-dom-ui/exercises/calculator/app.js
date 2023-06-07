import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('inputs', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let left = readNumber('left');
  let right = readNumber('right');
  const operation = readString('operator');

  let message = '';

  if (operation === '+') {
    message = left + right;
  } else if (operation === '-') {
    message = left - right;
  } else if (operation === '*') {
    message = left * right;
  } else {
    message = left / right;
  }

  message = '$ ' + message;

  displayString('result', message);
});
