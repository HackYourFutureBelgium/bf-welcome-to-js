// these are the only functions you will need
/*import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let name = readString('the-name');

  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + name + '!';

  // --- display the message ---

  displayString('greeting-output', greeting);
}); */

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
'user strict';

import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  let firstName = readString('first-name');
  let lastName = readString('last-name');

  console.log(firstName, lastName);

  let greeting = `Hello ${firstName} ${lastName}\nGoodbye ${firstName} ${lastName}!`;

  displayString('greeting-output', greeting);
});
