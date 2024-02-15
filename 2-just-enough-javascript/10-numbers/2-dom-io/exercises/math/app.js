// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const leftNumber = readNumber('Enter the left number:');
  const rightNumber = readNumber('Enter the right number:');

  // --- do the math ---
  const addition = `${leftNumber} + ${rightNumber} : ${
    leftNumber + rightNumber
  }`;
  const subtraction = `${leftNumber} - ${rightNumber} : ${
    leftNumber - rightNumber
  }`;
  const multiplication = `${leftNumber} * ${rightNumber} : ${
    leftNumber * rightNumber
  }`;
  const division = `${leftNumber} / ${rightNumber} : ${
    leftNumber / rightNumber
  }`;
  const reminder = `${leftNumber} % ${rightNumber} : ${
    leftNumber % rightNumber
  }`;
  // --- create a message
  const message = `${addition}\n${subtraction}\n${multiplication}\n${division}\n${reminder}`;
  // --- display the message ---
  console.log(result);
});
