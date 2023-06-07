'use strict';

/* Be Excited


  Data In: User input

  Data Out: user input + !

  Test Cases: hello --> hello!

*/
let input = null;
while (input === null) {
  input = prompt('enter something, it will become excited');
}
let output = input;
if (input[input.length - 1] !== '!') {
  output = output + '!';
}

alert(output);
