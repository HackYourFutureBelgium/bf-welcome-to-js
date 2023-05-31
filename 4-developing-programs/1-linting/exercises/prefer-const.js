// #todo

'use strict';

/* https://eslint.org/docs/rules/prefer-const

  this rule does not allow `let` variable that are not reassigned

*/

const input = prompt('enter something, it will be broken');
while (input === null) {
  
}

for (let char of input) {
  alert(char);
}
