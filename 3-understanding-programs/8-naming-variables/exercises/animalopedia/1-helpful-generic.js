'use strict';

/* generic

  _a -> input, which represents a string of user input to be processed in the program.

  _b -> output which holds the final output value of the program, created based on the input.

  _c -> next, representing the boolean flag indicating whether the loop should continue or not.

*/

alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it',
);

let input = null;
while (input === null) {
  input = prompt('enter an animal');
}

let output = '';

let next = false;

while (!next) {
  output = prompt('tell me something about ' + input);
  if (output === '' || output === null) {
    alert('that is not something');
  } else if (output.toLowerCase().includes(input.toLowerCase())) {
    next = true;
  } else {
    alert('nope, not about ' + input + '.  try again.');
  }
}
alert(
  'i just learned something cool about ' + input + '!\n\n- "' + output + '"',
);
