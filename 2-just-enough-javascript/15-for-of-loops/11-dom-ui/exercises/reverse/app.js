import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
console.log('--- form data changed ---');
// Read the text to reverse from user input
const text = readString('to-reverse');
// Reverse the text
const reversedText = text.split('').reverse().join('');
// Display the reversed text
displayString('output', reversedText);
}); 