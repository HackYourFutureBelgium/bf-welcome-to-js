// #todo

'use strict';
/*


  Data In: input

  Data Out: depends on input
    cancel -> you canceled
    less than 5 -> too short
    more than 5 -> long enough
    equal to 5 -> exactly 5!

  Test Cases: 
  

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

-alert(message);
