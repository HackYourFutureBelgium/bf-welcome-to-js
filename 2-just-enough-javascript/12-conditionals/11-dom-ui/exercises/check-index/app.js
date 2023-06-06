import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let text = readString('text');

  let character = readString('character');

  let i = readNumber('i');
  // --- check the index ---

  let searchResult = '';
  if (i || i === 0) {
    if (text[i] === character) {
      searchResult = 'yes';
    } else {
      searchResult = 'no';
    }
  } else {
    searchResult = 'oops! you entered fewer than one character';
  }

  // --- display the search results ---
  displayString('search-result', searchResult);
});
