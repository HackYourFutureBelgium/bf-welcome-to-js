import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  //debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  // Read the number of bricks from user input

  let bricks = readString('pyramid-bricks');
  console.log(bricks);
  // --- build a pyramid ---

  let pyramid = '';
  for (let i = 0; i <= bricks.length; i++) {
    pyramid += bricks.substr(0, i) + `\n`;
  }

  // --- display the pyramid ---
  displayString('out', pyramid);
});
