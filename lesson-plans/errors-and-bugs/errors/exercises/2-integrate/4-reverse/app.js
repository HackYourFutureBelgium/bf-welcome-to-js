import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: Type error
  message: screaming is not iterable at HTML FormElement

  location: 34

  life cycle:Executionphase

  the mistake: the screaming value is boolean

  the fix(es): using the correct variable text in loop
*/

whenFormDataChanges('reversify', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) { // let character of screaming
    reversed = character + reversed;
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (screaming) {
    finalText = reversed.toUpperCase();
  } else {
    finalText = reversed.toLowerCase();
  }

  // --- display the final text ---

  displayString('out', finalText);
});
