'use strict';

/* generic

   _a -> input:
    named because it represents the user input to be processed in the program

  _b -> target:
    named because it stores the target value to be compared against the input

  _c -> result:
    named because it represents the result of the comparison operation

  _d -> item:
    named because it represents each item in the input during the iteration

  _e -> isMatch:
    named because it stores the result of checking if the item matches the target

*/

let input = null;
while (input === null) {
  input = prompt('enter some text, the program will check if it is only vowels');
}

let target = 'aeiou';

let result = true;
for (let item of input) {
  let isMatch = target.includes(item.toLowerCase());
  if (!isMatch) {
    result = false;
    break;
  }
}

alert(result);