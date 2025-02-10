'use strict';

let a = 'Ewin'; // declare and initialization let a = 'Ewin'
// let a = 'Tugba'; // declare and initialization let a = 'Tugba'
// let a = 'Jo'; // declare and initialization let a = 'Jo'
// let a = 'Olesandra'; // declare and initialization let a = 'Olesandra'

let b = 'Hello ' + a + ', your name is '; // declare and initialization let b

if (a.length > 4) {
  // read variable a and compare if the number of letters in the variable is more than 4
  b = b + 'long.'; // if more than 4 reassign let b = b + 'long.'
} else if (a.length === 4) {
  // read variable a and compare if the number of letters in the variable is equals 4
  b = b + 'perfect.'; // if equals 4 reassign let b = b + 'perfect.'
} else {
  // in any other case reassign b = b + 'short.'
  b = b + 'short.';
}

console.log(b); // read let b
