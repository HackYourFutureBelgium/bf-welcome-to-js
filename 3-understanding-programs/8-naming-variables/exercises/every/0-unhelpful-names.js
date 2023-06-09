'use strict';

/*
  _a:
    declaration:
      init: null
      types: null
      scopes: Global 
    reads:
      scopes: while loop
      checks: while condition
    assignments:
      types: null
      scopes: while loop

  _b:
    declaration:
      init: yes
      types: string
      scopes: Global 
    reads:
      scopes: -
      checks: -
    assignments:
      types: -
      scopes: -

  _c:
    declaration:
      init: yes
      types: boolean
      scopes: Global 
    reads:
      scopes: for of loop
      checks: for of loop
    assignments:
      types: boolean
      scopes: for of loop

   _d:
    declaration:
      init: yes
      types: Unknown
      scopes: For of loop
    reads:
      scopes: For of loop
      checks: For of loop
    assignments:
      types: -
      scopes: For of loop

  _e:
    declaration:
      init: yes
      types: boolean
      scopes: For of loop
    reads:
      scopes: For of loop
      checks: For of loop
    assignments:
      types: -
      scopes: For of loop

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