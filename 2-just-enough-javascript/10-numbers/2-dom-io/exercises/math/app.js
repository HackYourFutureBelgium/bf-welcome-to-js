// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const numberLeft = readNumber('left-num');
  const numberRight = readNumber('right-num');

  // --- create a message

  let message = `__ + __ === ${numberLeft + numberRight}\n`;
  message += `__ - __ === ${numberLeft - numberRight}\n`;
  message += `__ * __ === ${numberLeft * numberRight}\n`;
  message += `__ / __ === ${numberLeft / numberRight}\n`;
  message += `__ % __ === ${numberLeft % numberRight}`;

  displayString('sum', message);
});
