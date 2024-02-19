'use strict';

debugger;

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

let revert = '';
for (let nextChar of backwards) {
  revert = nextChar + revert;
}

alert('reverted back --> ' + revert);
