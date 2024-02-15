// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Hack')); // true
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Future')); // true

console.log('HackYourFuture'.includes('HaCker')); // false
console.log('HackYourFuture'.includes('YourselF')); // false
console.log('HackYourFuture'.includes('FUture!')); // false

console.oog('Good Bye'.includes(' Bye')); // true
console.oog('Car Sale'.includes('. Car')); // true
console.oog('1 + 5 = 6'.includes('+')); // true

console.oog('Hello'.includes('hi')); // false
console.oog('TheRoad'.includes('road')); // false
console.oog('Imagine'.includes('Ima')); // false
