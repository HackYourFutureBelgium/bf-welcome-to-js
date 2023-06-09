'use strict';

/* https://eslint.org/docs/rules/no-var

  this rule means you can't use `var` in your code

  `var` is trickier to debug and can create unexpected behavior

*/

let likesApples = confirm('do you like apples?');

let greeting = '';
if (likesApples) {
  greeting = 'hello, welcome to my apple garden';
} else {
  greeting = 'hello, welcome to my orange garden';
}

alert(greeting);
