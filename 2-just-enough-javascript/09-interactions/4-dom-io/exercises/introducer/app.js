// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const firstName = readString('fn');
  const lastName = readString('ln');

  // --- create a message ---
  const message = `Hello, my name is ${firstName} ${lastName}.`;

  // --- display the message ---
  displayString('greet-field', message);
});
