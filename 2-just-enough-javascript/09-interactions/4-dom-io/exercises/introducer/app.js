// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

wwhenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let name = readString('fn' + 'ln');

  console.log(name);

  // --- create a message ---

  let greeting = 'Hello my name is ' + name + '.';

  // --- display the message ---

  displayString('greeting-output', greeting);
});