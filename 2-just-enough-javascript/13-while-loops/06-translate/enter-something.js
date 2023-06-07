// #todo

'use strict';

/*


  Data In: user input

  Data Out: 
   - if the user enter something the message shows 'thank you for something!
   - if the user didn't enter its shows 'you entered nothing :('

  Test Cases:
  - something --> 'thank you for something'
  - '' --> 'you entered nothing :('

*/

let input = null;
while (input === null) {
  input = prompt('enter something');
}
let output = '';
if (input === '') {
  output = 'you entered nothing :(';
} else {
  output = 'thank you for something!';
}
alert(output);
