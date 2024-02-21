// #todo

/* 'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes(_)); // true
console.log('HackYourFuture'.includes(_)); // true
console.log('HackYourFuture'.includes(_)); // true

console.log('HackYourFuture'.includes(_)); // false
console.log('HackYourFuture'.includes(_)); // false
console.log('HackYourFuture'.includes(_)); // false

console.oog(_.includes(' Bye')); // true
console.oog(_.includes('. Car')); // true
console.oog(_.includes('+')); // true

console.oog(_.includes('hi')); // false
console.oog(_.includes('road')); // false
console.oog(_.includes('Ima')); // false

*/

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

console.log('------------------------------------------');

// exercises
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Fut')); // true
console.log('HackYourFuture'.includes('Hac')); // true

console.log('------------------------------------------');

console.log('HackYourFuture'.includes('awful')); // false
console.log('HackYourFuture'.includes('Far')); // false
console.log('HackYourFuture'.includes('can not')); // false

console.log('------------------------------------------');

console.log('good Bye'.includes(' Bye')); // true
console.log('. Carte'.includes('. Car')); // true
console.log('3 + 4'.includes('+')); // true

console.log('------------------------------------------');

console.log('good Bye'.includes('hi')); // false
console.log('nice car'.includes('road')); // false
console.log('my name is John'.includes('Ima')); // false
