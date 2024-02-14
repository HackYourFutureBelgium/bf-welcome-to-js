// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Future')); // true
console.log('HackYourFuture'.includes('YourFuture')); // true
console.log('HackYourFuture'.includes('kYour')); // true

console.log('HackYourFuture'.includes('your')); // false
console.log('HackYourFuture'.includes('hack')); // false
console.log('HackYourFuture'.includes('future')); // false

console.log('Good Bye'.includes(' Bye')); // true
console.log('My. Car'.includes('. Car')); // true
console.log('good + bye'.includes('+')); // true

console.log('Hi'.includes('hi')); // false
console.log('Road'.includes('road')); // false
console.log('Iam'.includes('Ima')); // false
