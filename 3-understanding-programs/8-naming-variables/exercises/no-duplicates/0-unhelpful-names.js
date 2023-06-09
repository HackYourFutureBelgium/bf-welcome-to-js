'use strict';

/*
  _a:
    declaration:
      init: yes
      types: null
      scopes: global
    reads:
      scopes: while loop
      checks: while condition
    assignments:
      types: unknown
      scopes: while loop

  _b:
    declaration:
      init: yes
      types: string
      scopes: global
    reads:
      scopes: for of loop
      checks: 
    assignments:
      types: 
      scopes: for of loop

  _c:
    declaration:
      init: yes
      types: unknown
      scopes: for of loop
    reads:
      scopes: for of loop
      checks: 
    assignments:
      types: 
      scopes: for of loop

  _d:
    declaration:
      init: yes
      types: boolean
      scopes: for of loop
     reads:
      scopes: for of loop
      checks: if condition
    assignments:
      types: 
      scopes: for of loop

*/

let _a = null;
while (_a === null) {
  _a = prompt('enter something with no duplicate characters');
}

let _b = '';
for (let _c of _a) {
  let _d = _b.includes(_c);
  if (_d) {
    break;
  }
  _b = _b + _c;
}

if (_b.length === _a.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
