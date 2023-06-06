 import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let userInput = readString('to-mirror');

  // --- mirror the text ---
  let mirrored = '';
  for (let i = userInput.length - 1; i >= 0; i--) {
    mirrored += userInput[i];
  }
// --- create the combined output ---
  let output = `  ${mirrored} | ${userInput}`;


  // --- display the result ---
  displayString('output', output);
});

  
  
  
  
  
  
  
  
  
  

