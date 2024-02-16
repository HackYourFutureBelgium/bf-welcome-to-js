// these are the only functions you will need
import { log } from 'console';
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  --- read user input ---

//   let name = readString('the-name');

//   console.log(name);

//   --- create a message ---

//   let greeting = 'Hello ' + name + '!';

//   --- display the message ---

//   displayString('greeting-output', greeting);
// });

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/

const firstName = readString('first-name');
const lastName = readString('last-name');

console.log(firstName, lastName);
// --- create a message ---
const greeting = 'Hello ' + firstName + ' ' + lastName + '!\nGoodbye!';

// --- display the message ---
displayString('greeting-output', greeting);
