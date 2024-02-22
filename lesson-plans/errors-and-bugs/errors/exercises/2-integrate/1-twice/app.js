// these are the only functions you will need
import {
  displayString,
  readString,
  whenFormDataChanges,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake:

  the fix(es):
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  debugger;
  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
