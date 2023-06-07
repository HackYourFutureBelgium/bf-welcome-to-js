// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firtstName = readString('fn');
  let lastName = readString('ln');

  // --- create a message ---
  const message = 'Hello, my name is ' + firtstName + ' ' + lastName + '.';

  // --- display the message ---
  displayString('greet-field', message);
});
