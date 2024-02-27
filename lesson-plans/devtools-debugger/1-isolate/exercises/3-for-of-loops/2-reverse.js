'use strict';

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

// Solution

let toReverse = "Hello world! You're awesome!";
let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let forwards = '';
for (let nextChar of backwards) {
  forwards = nextChar + forwards;
}

let transformation = toReverse + ' -> ' + backwards;

console.log(transformation);
