import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('skippable', () => {
  console.log('--- form data changed ---');
debugger;
  // Read the skip size from user input
  let skipSize = readNumber('skip-size');

  // Read the phrase from user input
  const phrase = readString('phrase');

  // Skip characters in the phrase
  let newPhrase = '';

  let i = 0;
  for (let char of phrase) {
    if (i % skipSize !== 0) {
      newPhrase += char;
    }
    i++;
  }
  // Display the skipped phrase
  displayString('skipped', newPhrase);
});
