// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Future')); // true
console.log('HackYourFuture'.includes('ckYour')); // true

console.log('HackYourFuture'.includes('future')); // false
console.log('HackYourFuture'.includes('your')); // false
console.log('HackYourFuture'.includes('HACK')); // false

console.log('Good Bye'.includes(' Bye')); // true
console.log('In. Car'.includes('. Car')); // true
console.log('hello + world'.includes('+')); // true

console.log('Hiking'.includes('hi')); // false
console.log('rode'.includes('road')); // false
console.log('Himalayas'.includes('Ima')); // false
