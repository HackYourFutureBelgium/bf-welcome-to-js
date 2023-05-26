// #todo

'use strict';

// combining .toUpperCase or .toLowerCase with .includes is helpful
//  you can now search strings without worrying about upper or lower case

console.log('-- case insensitive string searches --');

// examples
console.log('JavaScript'.toLowerCase().includes('script')); // true
console.log('JAVASCRIPT'.toLowerCase().includes('script')); // true
console.log('javascript'.toLowerCase().includes('script')); // true

console.log('JavaScript'.toUpperCase().includes('SCRIPT')); // true
console.log('JAVASCRIPT'.toUpperCase().includes('SCRIPT')); // true
console.log('javascript'.toUpperCase().includes('SCRIPT')); // true

// exercises
//  fill in the blanks with something that will evaluate to true
//  there's many different answers! how many can you find?

console.log('PassPort'.toLowerCase().includes('pass')); // true
console.log('hACK YouR FuTuRE'.toLowerCase().includes('future')); // true
console.log('_Robin_Batman'.toLowerCase().includes('bin')); // true

console.log('PassPort'.toUpperCase().includes('Port')); // false
console.log('hACK YouR FuTuRE'.toUpperCase().includes('Your')); // false
console.log('_Robin_Batman'.toUpperCase().includes('Robin')); // false

console.log('Timothy'.toLowerCase().includes('tim')); // true
console.log('Auto win'.toLowerCase().includes('o w')); // true
console.log('M. en'.toLowerCase().includes('. e')); // true

console.log('Time'.toUpperCase().includes('TIM')); // true
console.log('O wn'.toUpperCase().includes('O W')); // true
console.log('W. emen'.toUpperCase().includes('. E')); // true
