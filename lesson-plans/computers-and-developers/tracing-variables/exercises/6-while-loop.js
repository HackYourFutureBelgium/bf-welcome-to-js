'use strict';

let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

let b = '1';

// Since a has a length of 1, b will have a length of 3 after the loop completes
while (b.length < a.length * 3) {
  b = b + a;
}

console.log(b); /* *** */
