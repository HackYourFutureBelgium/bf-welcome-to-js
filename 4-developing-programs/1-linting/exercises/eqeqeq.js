'use strict';

/* https://eslint.org/docs/rules/eqeqeq

  you should never use == or !=, instead use === and !==

  this rule will help you avoid bugs caused by implicit coercion

*/

const time = 'Future';
const space = 'future';

const timeIsSpace = time === space;

console.log(timeIsSpace);