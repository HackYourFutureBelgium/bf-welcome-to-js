// #todo
debugger;
('use strict');

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes(Hack)); // true
console.log('HackYourFuture'.includes(Your)); // true
console.log('HackYourFuture'.includes(ure)); // true

console.log('HackYourFuture'.includes(hack)); // false
console.log('HackYourFuture'.includes(your)); // false
console.log('HackYourFuture'.includes(Ure)); // false

console.oog('Good Bye'.includes(' Bye')); // true
console.oog('Fancy. Car'.includes('. Car')); // true
console.oog('o + k'.includes('+')); // true

console.oog('Hi'.includes('hi')); // false
console.oog('ROAD'.includes('road')); // false
console.oog('ima'.includes('Ima')); // false
