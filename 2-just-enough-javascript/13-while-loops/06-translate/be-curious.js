'use strict';

/* Be Curious


  Data In: User input

  Data Out: user input + ?

  Test Cases: Hello --> Hello?

*/

let input = null;
while (input === null) {
  input = prompt('enter something, it will become curious');
}
let output = input;
if (input[input.length - 1] !== '?') {
  output = output + '?';
}
alert(output);
