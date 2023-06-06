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

  let repeated = '';
  for (let i = 1; i <= 4; i++) {
    repeated += i + '. ' + text + '\n';
  }

  // --- display the repeated text ---

  // display a string to the <pre> with id "doubled-input"
  displayString('doubled-input', repeated);
});

/* ===== Challenges =====

Copy the user's text 4 times
Number the copies like this:
asdf
asdf
asdf
asdf
*/