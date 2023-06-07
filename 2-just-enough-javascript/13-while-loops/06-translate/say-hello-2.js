'use strict';

/*


  Data In: user input

  Data Out: 
   - if we are type hello the message shows 'hello to you too!'
   - if we are not enter hello the message shows 'good bye'
   - if we press cancel the prompt will show again and again

  Test Cases:
   - hello --> 'hello to you too!'
   - world --> 'good bye'
   - press cancel --> 'say hello'

*/

/* ---   ?   --- */
let input = null;
while (input === null) {
  input = prompt('say hello');
}
let message = '';
if (input === 'hello') {
  message = 'hello to you too!';
} else {
  message = 'good bye';
}
alert(message);