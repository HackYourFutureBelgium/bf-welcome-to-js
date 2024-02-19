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

  let firstName = readString('the-firstname');
  let lastName = readString('the-lastname');


  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + firstName+' '+lastName + '!';
  let goodbye = 'goodbye '  + firstName+' '+lastName + '!';

  // --- display the message ---

  displayString('greeting-output', greeting);
  displayString('goodbye',goodbye);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
