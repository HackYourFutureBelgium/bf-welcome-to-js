import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('reversify', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  console.log(text, screaming);

  // --- reverse the string input ---

    /*let reversed = '';
  let text = 'charset';
  for (let i = text.length; i >= 0; i--) {
    if (!text.has(text[i])) {
      reverse += text[i];
      text.add (text[i]);
    }
  }

  console.log(reversed);
  console.log(text);*/

  let reversed = '';
  for (let character of text) {
    reversed = character + reversed;
  }
  console.log(reversed);

  // --- set to upper or lower case ---

  let finalText = '';
  if (i > 10) {
    finalText = reversed.toUpperCase();
  } else if (i < 5) {
    finalText = reversed.toLowerCase();
  } else {
    finalText = reversed;
  }
  console.log(finalText);

  // --- display the final text ---

  // display the final text to the <pre> with id "out"
  displayString('out', finalText);
});

/*  ===== Challenges =====

  - change the condition so upper/lower case depends on the length of the input
      longer inputs are upper case
      medium inputs are not changed
      shorter inputs are lower case
  - make sure each character appears only once in the reversed text

*/
