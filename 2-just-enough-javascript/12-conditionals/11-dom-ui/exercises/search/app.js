import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let text = readString('text');

  let query = readString('query');

  let sensitive = readBoolean('sensitive');

  // --- do the search ---

  let searchResult = '';

  if (text.includes(query)) {
    searchResult = 'yes';
  } else if (!sensitive) {
    searchResult = 'yes';
  } else {
    searchResult = 'no';
  }

  // --- display the search results ---

  displayString('search-result', searchResult);
});
