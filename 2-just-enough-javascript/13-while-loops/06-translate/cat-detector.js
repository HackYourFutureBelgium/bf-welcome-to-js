'use strict';

/* Cat Detector


  Data In: user input

  Data Out: 
  - if the user input is 'cat' the message shows 'thank you for the cat'
  - if the user input is not 'cat' the message shows '"' + input + '" is not a cat' 

  Test Cases:
  - cat --> 'thank you for the cat
  - dog --> '"dog is not a cat"'


*/

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}


let message = '';
if (input !== 'cat') {
message = '"' + input + '" is not a cat';
}else {
  message = 'thank you for the cat';
} 
alert(message);
