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
      checks: if condition
    assignments:
      types: 
      scopes: for of loop

*/



let _a = null;
while (_a === null) {
  _a = prompt('enter some text, can you guess what the program does?');
}

let _b = '';
for (let _c of _a) {
  if ('aeiou'.includes(_c)) {
    _b = _b + _c.toUpperCase();
  } else if ('AEIOU'.includes(_c)) {
    _b = _b + _c.toLowerCase();
  } else {
    _b = _b + _c;
  }
}

alert(_b);
