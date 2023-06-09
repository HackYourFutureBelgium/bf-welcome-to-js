'use strict';

// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

// --- read user input ---

whenFormDataChanges('nums', () => {
  const leftNum = readNumber('left-num');
  const rightNum = readNumber('right-num');

  // --- create a message

  let comparisonResult = `${leftNum} > ${rightNum}   ---->  ${leftNum > rightNum}
${leftNum} >= ${rightNum}  ----> ${leftNum >= rightNum}
${leftNum} === ${rightNum} ----> ${leftNum === rightNum}
${leftNum} <= ${rightNum}  ----> ${leftNum <= rightNum}
${leftNum} < ${rightNum}   ----> ${leftNum < rightNum}`;
  displayString('compared', comparisonResult);
});
