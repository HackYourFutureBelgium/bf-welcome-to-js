'use strict';

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

/* the output will be:
Ewin = 'Hello Ewin, your name is perfect'
Jo = 'Hello Jo, your name is short'
Olesandra = 'Hello Olesandra, your name is long'
