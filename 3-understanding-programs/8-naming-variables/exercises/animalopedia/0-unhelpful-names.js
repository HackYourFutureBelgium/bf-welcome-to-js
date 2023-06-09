'use strict';

/*
  _a:
    declaration: 
      init: yes
      types: object
      scopes: global
    reads: 5
      scopes: glopal, local
      checks: while llop
    assignments: 1
      types: string
      scopes: global

      _b:
    declaration: 
      init: yes
      types: string
      scopes: global
    reads: 4
      scopes: global, local
      checks: while loop
    assignments: 1
      types: string
      scopes: global

      _c:
    declaration: 
      init: yes
      types: boolean
      scopes: global
    reads: 2
      scopes: else if condition
      checks: while loop
    assignments: 1
      types: boolean
      scopes: if condition
*/

alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it',
);

let _a = null;
while (_a === null) {
  _a = prompt('enter an animal');
}

let _b = '';

let _c = false;
while (!_c) {
  _b = prompt('tell me something about ' + _a);

  if (_b === '' || _b === null) {
    alert('that is not something');
  } else if (_b.toLowerCase().includes(_a.toLowerCase())) {
    _c = true;
  } else {
    alert('nope, not about ' + _a + '.  try again.');
  }
}

alert('i just learned something cool about ' + _a + '!\n\n- "' + _b + '"');
