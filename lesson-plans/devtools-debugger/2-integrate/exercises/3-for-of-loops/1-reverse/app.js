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

  let reversed = '';
  for (let character of text) {
    reversed = character + reversed;
  }
  console.log(reversed);

  // --- remove dublikate charakters ---
  let reversedCut = '';
  let cut = '';
  for (let cutChar of reversed) {
    if (cutChar !== cut) {
      cut = cutChar;
      reversedCut += cut;
    }
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (text.length >= 10) {
    finalText = reversedCut.toUpperCase();
  }
  if (text.length < 5) {
    finalText = reversedCut.toLowerCase();
  }
  if (text.length >= 5 && text.length < 10) {
    finalText = reversedCut;
  }
  console.log(finalText);

  // --- display the final text ---  // display the final text to the <pre> with id “out”

  displayString('out', finalText);
});

/*  ===== Challenges =====

  - change the condition so upper/lower case depends on the length of the input
      longer inputs are upper case
      medium inputs are not changed
      shorter inputs are lower case
  - make sure each character appears only once in the reversed text

*/
