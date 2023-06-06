// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstName = readString('first-name');
  let lastName = readString('last-name');

  console.log(firstName, lastName);

  // --- create messages ---

  let greeting = 'Hello ' + firstName + '!';
  let farewell = 'Goodbye ' + firstName + ' ' + lastName + '!';

  // --- display the messages ---

  displayString('greeting-output', greeting + '\n' + farewell);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
