import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let number1 = readNumber('left');
  let number2 = readNumber('right');

  console.log(number1);
  console.log(number2);

  // --- create a message ---

  let sum = number1 * number2;

  // --- display the message ---

  displayString('secret-solution', sum);
});
