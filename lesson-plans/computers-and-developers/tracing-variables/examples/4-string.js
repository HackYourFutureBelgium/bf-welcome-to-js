'use strict';

/* Strings

  1- strings are a data type used to work with text in programs

  2- in JS, a string is anything wrapped in quotation marks

  3- There is no difference between single quote ' ' or double quote " "
  in JS, but if you start with ' you must end the string with '
  same for double quote " "

  4- Template literals:
  - allow creating multiline strings.
  - allow string interpolation

*/

// an empty string
let emptyString = '';  // empty line

// log the variable emptyString  // CREATE empty line
console.log(emptyString);  // SHOW empty line

// a string with quotes in it
let sound = '"moo"';  // variable sound and assign it the string "moo"

// log the variable sound
console.log(sound);  // show variable sound and assign it the string "moo"

// a string cows
let animal = 'cows';  // variable animal and assign it the string "cows"

// log the variable animal
console.log(animal);  // show variable animal and assign it the string cows

let message = `
I used to have a nice cow, 
her name was cow
do you know that ${animal} says ${sound}!
`;

console.log(message);


let userName = 'Alex';  
userName = 'Mariia';  // WE CAN NOT DO THIS. BUT WE CAN RENAME OLD VARIABLE
console.log(userName);

if (typeof name !== 'undefined') {
    console.log('Variable already exists!');
} else {
    let name = 'Alex';
    console.log('Variable exists:', Alex);
}