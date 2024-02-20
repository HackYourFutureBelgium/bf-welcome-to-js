import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:chrome

  name: TypeError
  message: screaming is not iterable
    at HTMLFormElement.<anonymous>

  location:app.js:35:25

  life cycle:execution

  the mistake: in for loop screaming boolean

  the fix(es): use instead string text
*/

whenFormDataChanges('reversify', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) {
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
