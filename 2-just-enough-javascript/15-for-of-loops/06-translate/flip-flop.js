'use strict';

/*


  Data In: user input

  Data Out: ehllo

  Test Cases: hello --> ehllo

*/

/* ---   ?   --- */

let normalPhrase = null;

while (normalPhrase === null) {
  normalPhrase = prompt('Enter something to flip-flop');
}

/* ---   ?   --- */

let previous = '';
let flipFlopped = '';

for (let i = 0; i < normalPhrase.length; i++) {
  let current = normalPhrase[i];

  if (previous !== '') {
    flipFlopped += current + previous;
    previous = '';
  } else {
    previous = current;
  }
}

/* ---   ?   --- */

if (flipFlopped.length < normalPhrase.length) {
  flipFlopped += normalPhrase[normalPhrase.length - 1];
}

/* ---   ?   --- */

alert(flipFlopped);