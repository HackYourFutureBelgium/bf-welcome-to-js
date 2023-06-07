// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nametag', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firstName = readString('first');
  let lastName = readString('last');

  // --- create a greeting ---
  let greeting = 'Hello ' + firstName + ' ' + lastName + '.';

  // --- display the greeting ---
  displayString('greeting', greeting);
});
