/*'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation); */

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

'use strict';

let string = '';
let reversed = '';
for (let i = string.length - 1; i >= 0; i--) {
  reversed += string[i];
}
console.log(reversed);
