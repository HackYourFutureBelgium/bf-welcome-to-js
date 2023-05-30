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

  let firstName = readString('firstName');
 let lastName = readString('lastName');
  let name = firstName + ' ' + lastName;
  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + name;
  let farewell = 'good bye ' + name + '!';
  

  // --- display the message ---

  displayString('greeting-output', greeting + '\n' + farewell);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
