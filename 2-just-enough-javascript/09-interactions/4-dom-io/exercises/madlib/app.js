// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-words', () => {
  // debugger;
  console.log('\n--- form data changed ---');
  // --- read user input ---
  const noun = readString('noun');
  const verb = readString('verb');
  const adjective = readString('adjective');

  // --- create a funny sentence ---
  let sentence = `On ${adjective} days the ${noun} will always ${verb}.`;
  // --- display the sentence ---
  displayString('funny-sentence', sentence);
});
