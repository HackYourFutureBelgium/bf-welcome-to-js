'use strict';
/*


  Data In: If the user input is < 5

  Data Out: 'too short'

  Test Cases: Hi --> 'too short'

*/

let input = prompt('enter anything longer than 5 characters');
let message;
if (input === null) {
  message = 'you canceled :(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length > 5) {
  message = 'long enough';
} else {
  message = 'exactly 5!';
}

alert(message);
