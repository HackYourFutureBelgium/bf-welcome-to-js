'use strict';

debugger;

let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is ';

if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b);

let x = 'Elias';
let y = 'Bonjour ' + x + ", ton nom c'est ";

if (x.length > 5) {
  y = y + 'long.';
} else if (x.length === 5) {
  y = y + 'parfait.';
} else {
  y = y + 'court';
}
console.log(y);
