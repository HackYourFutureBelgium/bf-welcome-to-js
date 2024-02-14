'use strict';

debugger;

/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

let isMoneyEnough = false;

if (isMoneyEnough) {
  console.log('You can go on vacation!');
} else {
  console.log("You are Poor, you can't go on vacation!!! ");
}

let age = Number(prompt('Enter your age: '));
if (age === 18) {
  console.log('You can drive');
} else if (age < 18) {
  console.log('You have to wait');
} else if (age > 18) {
  console.log('You are driving already');
} else {
  console.log('You are not born yet');
}

let x = 'hello';
let y = 'you';
while (y.length < x.length * 3) {
  y = y + x;
}

console.log(y);
