'use strict';

/* Reverse


  This program accepts string or numbers and revers entered data.

  Data In:
  Any numbers or text.

  Data Out:

  A friendly message:
  "enter some text to reverse".

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
