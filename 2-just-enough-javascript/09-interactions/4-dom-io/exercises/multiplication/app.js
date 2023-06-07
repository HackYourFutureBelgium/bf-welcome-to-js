import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let x = readNumber('left');
  let y = readNumber('right');

  // --- multiply the numbers ---
  let z = x * y;

  // --- create a message ---
  let message = `${x}` + ' * ' + `${y}` + ' === ' + z;

  // --- display the message ---
  displayString('product', message);
});
