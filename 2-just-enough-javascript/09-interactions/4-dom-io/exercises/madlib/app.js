// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let name = readString('user-words');

  console.log(name);

  // --- create a message ---

  let greeting = 'On ' + adj + ' days the ' + noun + 'will always' + verb;

  // --- display the message ---

  displayString('greeting-output', greeting);
});
