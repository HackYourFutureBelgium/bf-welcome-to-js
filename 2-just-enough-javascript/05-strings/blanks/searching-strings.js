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

console.log('PassPort'.toLowerCase().includes('port')); // true
console.log('hACK YouR FuTuRE'.toLowerCase().includes('future')); // true
console.log('_Robin_Batman'.toLowerCase().includes('batman')); // true

console.log('PassPort'.toUpperCase().includes('port')); // false
console.log('hACK YouR FuTuRE'.toUpperCase().includes('future')); // false
console.log('_Robin_Batman'.toUpperCase().includes('batman')); // false

console.log('TimCook'.toLowerCase().includes('tim')); // true
console.log('C o w'.toLowerCase().includes('o w')); // true
console.log('Futur . e'.toLowerCase().includes('. e')); // true

console.log('tim'.toUpperCase().includes('TIM')); // true
console.log('c o w'.toUpperCase().includes('O W')); // true
console.log('futur . e'.toUpperCase().includes('. E')); // true
