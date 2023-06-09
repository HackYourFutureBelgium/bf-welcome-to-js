'use strict';

/* generic

  _a ->  input:  named because it repersents the user input or value to be processed in the program


  -b -> output:   named because it holds the final output value or result of the program


  -c -> next : named because it represents the next item, element, or character being processed in a sequence or collection

*/

alert('you will need to enter strings with "e" in the right place');

let input = 0;

let output = 'entries:';

while (true) {
  let next = prompt('input a string with "e" at index ' + input);

  if (next === null) {
    let _d = confirm('are you sure you want to cancel?');
    if (_d) {
      break;
    } else {
      continue;
    }
  }

  if (next[input] !== 'e') {
    output = output + '\nx. "' + next + '"';
    break;
  }

  output = output + '\n' + input + '. "' + next + '"';
  input = input + 1;
}

alert('your score: ' + input + '\n\n' + output);