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

let _a = null;
while (_a === null) {
  _a = prompt('enter some text, the program will check if it is only vowels');
}

let _b = 'aeiou';

let _c = true;
for (let _d of _a) {
  let _e = _b.includes(_d.toLowerCase());
  if (!_e) {
    _c = false;
    break;
  }
}

alert(_c);
