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
console.log('hACK YouR FuTuRE'.toLowerCase().includes('hack')); // true
console.log('_Robin_Batman'.toLowerCase().includes('robin')); // true

console.log('PassPort'.toUpperCase().includes('PASS')); // false
console.log('hACK YouR FuTuRE'.toUpperCase().includes('HACK')); // false
console.log('_Robin_Batman'.toUpperCase().includes('BATMAN')); // false

console.log('Tim'.toLowerCase().includes('tim')); // true
console.log('O W'.toLowerCase().includes('o w')); // true
console.log('. E'.toLowerCase().includes('. e')); // true

console.log('tim'.toUpperCase().includes('TIM')); // true
console.log('o w'.toUpperCase().includes('O W')); // true
console.log('. e'.toUpperCase().includes('. E')); // true
