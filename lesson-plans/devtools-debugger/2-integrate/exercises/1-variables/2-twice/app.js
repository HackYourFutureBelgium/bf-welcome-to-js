// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  // read a string from the <input> with id "to-double"
  let text = readString('to-double');

  // --- repeat the text ---

  let repeated =
    '1. ' +
    text +
    '\n' +
    '2. ' +
    text +
    '\n' +
    '3. ' +
    text +
    '\n' +
    '4. ' +
    text;

  // --- display the repeated text ---

  // display a string to the <pre> with id "doubled-input"
  displayString('doubled-input', repeated);
});

/*  ===== Challenges =====

  - Copy the user's text 4 times
  - Number the copies like this:
    1. asdf
    2. asdf
    3. asdf
    4. asdf

*/
