// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: Chrome

  name: SyntaxError
  message: Cannot use import statement outside a module
 
  location: line 32

  life cycle: creation

  the mistake: + operation mentioned between the variable and value

  the fix(es): instead of + mentioned =
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
