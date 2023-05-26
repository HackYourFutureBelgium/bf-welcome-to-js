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
  let fn = readString('the-fn');
  let ln = readString('the-ln');
  let name = fn + ' ' + ln;

  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + name + '!';
  let farewell = 'Good bye ' + name + '!';

  let output = greeting + '\n' + farewell

  // --- display the message ---

  displayString('output', output );
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
