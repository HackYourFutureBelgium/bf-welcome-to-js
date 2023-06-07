import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('skippable', () => {
//debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const phrase = readString('phrase');
  let skipSize = readNumber('skip-size');

  // --- skip characters ---
  let newPhrase = '';

  let i = 0;
  for (let char of phrase) {
    if (i % skipSize !== 0) {
      newPhrase += char;
    }
    i++;
  }
  // --- display the result ---
  displayString('skipped', newPhrase);
});