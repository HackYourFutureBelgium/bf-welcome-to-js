// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: syntax error
  message: un expected token '+'

  location: 32

  life cycle: Creationphase

  the mistake: using + after the variable repeated

  the fix(es): using = instead of +
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text; // let repeated + text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
