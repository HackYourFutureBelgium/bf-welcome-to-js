'use strict';

debugger;

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
let emptyString = '';
let videString = '';

// log the variable emptyString
console.log(emptyString);
console.log(videString);

// a string with quotes in it
let sound = '"moo"';
let music = '"la la la"';

// log the variable sound
console.log(sound);
console.log(music);

// a string cows
let animal = 'cows';
let stars = 'JLO';

// log the variable animal
console.log(animal);
console.log(stars);

let message = `
I used to have a nice cow, 
her name was cow
do you know that ${animal} says ${sound}!
`;

let messages = `I heard a new song, sang by ${stars} name of the song ${music}!`;

console.log(message);
console.log(messages);
