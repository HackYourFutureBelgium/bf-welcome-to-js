'use strict';

debugger;

/* Mirror

  Data In:
  any text,nr and symbol


  Data Out:
  a mirrored message


  Test Cases:
  '12345' -> '54321 | 12345'
  "Aujourd'hui" -> "iuh'druojuA | Aujourd'hui" 
  "Bonjour3Fois." -> ".sioF3ruojnoB | Bonjour3Fois."

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
