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
  let num1 = readNumber('left-num');
  let num2 = readNumber('right-num');

  // --- do the math ---
 let res1 = (num1 + num2);
 let res2 = (num1 - num2);
 let res3 = (num1 * num2);
 let res4 = (num1 / num2);
 let res5 = (num1 % num2);

  // --- create a message
 let text1 = (__ + __ === );
 let text2 = (__ - __ === ); 
 let text3 = (__ * __ ===); 
 let text4 = (__ / __ ===);
 let text5 = (__ % __ ===);

  // --- display the message ---
  displayString(text1 + res1);
  displayString(text2 + res2);
  displayString(text3 + res3);
  displayString(text4 + res4);
  displayString(text5 + res5);
});
