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
  const leftNumber = readNumber('left-num');
  const rightNumber = readNumber('right-num');

  // --- compare the numbers ---
  const greaterThan = `${leftNumber} > ${rightNumber} ----> ${
    leftNumber > rightNumber
  }`;
  const greaterThanOrEqual = `${leftNumber} >= ${rightNumber} ---> ${
    leftNumber >= rightNumber
  }`;
  const strictlyEqual = `${leftNumber} === ${rightNumber} --> ${
    leftNumber === rightNumber
  }`;
  const lessThanOrEqual = `${leftNumber} <= ${rightNumber} ---> ${
    leftNumber <= rightNumber
  }`;
  const lessThan = `${leftNumber} < ${rightNumber} ----> ${
    leftNumber < rightNumber
  }`;
  // --- create a message
  const message = `${greaterThan}\n${greaterThanOrEqual}\n${strictlyEqual}\n${lessThanOrEqual}\n${lessThan}`;

  // --- display the message ---
  displayString('compared', message);
});
