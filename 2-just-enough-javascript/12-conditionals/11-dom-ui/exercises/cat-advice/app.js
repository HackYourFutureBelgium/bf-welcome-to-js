import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let likesCats = readBoolean('likes-cats');

  let isAllergic = readBoolean('is-allergic');

  let ownsOne = readBoolean('owns-one');

  // --- generate good advice ---



  let advice = '';

  if (likesCats) {
    advice = 'get a cat';
  }  if (isAllergic) {
    advice = 'make a friend who has a cat';
  } if (ownsOne) {
    advice = 'replace your cat with a stuffed animal.';
  }



  // --- display advice for the user ---
  displayString('custom-advice', advice);

});
