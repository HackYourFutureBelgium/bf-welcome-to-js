// #todo

'use strict';

/* parsons-collapse: hint
  1. declare and initialize greeting
  2. enter a new scope
    a. declare a new greeting
    b. assign the new greeting's value to the greeting
  3. compare greeting to 'bye'
*/

let greeting = 'hello';

{
  let newGreeting = 'bye';
  greeting = newGreeting;
}

console.log(greeting === 'bye');

/* ------------ */

let newGreeting = 'bye';
greeting = newGreeting; // distractor
console.log(newGreeting === 'bye'); // distractor
