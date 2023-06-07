import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let doesLikeCats = readBoolean('likes-cats');
  let isAllergic = readBoolean('is-allergic');
  let hasACat = readBoolean('owns-one');

  let message = '';
  // --- generate good advice ---
  if (!isAllergic && !hasACat && doesLikeCats) {
    message = 'get a cat';
  } else if (isAllergic && !hasACat && !doesLikeCats) {
    message = 'you are doing great';
  } else if (!isAllergic && hasACat && !doesLikeCats) {
    message = 'you could be doing worse';
  } else if (isAllergic && !hasACat && doesLikeCats) {
    message = 'make a friend who has a cat';
  } else if (isAllergic && hasACat && !doesLikeCats) {
    message = 'rethink your life choices';
  } else if (!isAllergic && hasACat && doesLikeCats) {
    message = 'you are doing great';
  } else if (isAllergic && hasACat && doesLikeCats) {
    message = 'replace your cat with a stuffed animal';
  } else {
    message = 'you are doing great';
  }

  // --- display advice for the user ---
  displayString('custom-advice', message);
});
