import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  console.log('--- form data changed ---');
  // Read the user's input
  const character = readString('character');
  const phrase = readString('phrase');
  // Remove the character if there is only one
  let filteredPhrase = phrase;
  if (character.length === 1 && phrase.includes(character)) {
    filteredPhrase = phrase.replace(character, '');
  }
  // Display the filtered phrase
  displayString('filtered', filteredPhrase);
});