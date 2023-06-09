// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  const leftNum = readNumber('left-num');
  const rightNum = readNumber('right-num');

  // --- do the math ---

  const sum = leftNum + rightNum;
  const subtraction = leftNum - rightNum;
  const multiplication = leftNum * rightNum;
  const division = leftNum / rightNum;
  const modulus = leftNum % rightNum;

  // --- create a message

  const sumMessage = `___ + ___ === ${sum}`
  const subtractionMessage = `___ - ___ === ${subtraction}.`;
  const multiplicationMessage = `___ * ___=== ${multiplication}.`;
  const divisionMessage = ` ___ / ___ === ${division}.`;
  const modulusMessage = ` ___ % ___ === ${modulus}.`;

const finalMessage = `${sumMessage}\n${subtractionMessage}\n${multiplicationMessage}\n${divisionMessage}\n${modulusMessage}\n`
  // --- display the message ---

  displayString('sum', finalMessage);
  
});
