'use strict';

debugger;

/* Variables

  variables allow you to store values for later, kind of like boxes
  there are 3 things you can do with variables (for now):

  - Declare & Initialize
  - Read
  - Assign

  study tips: [variables], [open in] jsTutor, [trace], [ask me]

  - you can use typeof() method to check what is the type of a variable
  let name = 'John'
  console.log( typeof(name));

*/

// DECLARE a variable named `x`
// INITIALIZE the value to "hello"
let x = 'hello';

let coffe = 'milk';

// DECLARE a variable named `y`
// INITIALIZE the value to 3.14
const y = 3.14;

const money = 2.5;

// READ the value stored in `x`
console.log(x);

console.log(coffe);

// READ the value stored in `y`
console.log(y);

console.log(money);

// ASSIGN a new value to `x`
x = 'good bye';
coffe = 'good';

// can I assign a new value to y?
// y = 25;
/*A variable declared with const in 
JavaScript cannot have its value changed after assignment. However,
 you can still change the properties of objects.*/

// READ the value stored in `x`
console.log(x);

console.log('coffe');
// READ the value stored in `x`
// CONCATENATE "good bye" and "!"
// ASSIGN "good bye!" to `x`
x = x + '!';

coffe = coffe + '?';

// READ the value stored in `x`
console.log(x);

console.log(coffe);
