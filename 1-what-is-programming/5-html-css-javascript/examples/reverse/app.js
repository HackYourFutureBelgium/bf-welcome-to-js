import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../lib/dom-io/index.js';

debugger;

whenFormDataChanges('reversify', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read user input ---

  // read a string from the <input> with id "to-reverse"
  let text = readString('to-reverse');
  // read a boolean from the <input> with id "to-reverse"
  let screaming = readBoolean('loud');

  console.log(text, screaming);

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) {
    reversed = character + reversed;
  }

  console.log(reversed);

  // --- set to upper or lower case ---

  let finalText = '';
  if (screaming) {
    finalText = reversed.toUpperCase();
  } else {
    finalText = reversed.toLowerCase();
  }

  console.log(finalText);

  // --- display the final text ---

  // display the final text to the <pre> with id "out"
  displayString('out', finalText);
});
