'use strict';

// use a for-of loop to reverse `backwards`
//  assign the reversed string to `language`
// log each character in `language`
let backwards = 'tpircsavaj';
let language = '';

for (let letter of backwards) {
  language = letter + language;
}

for (let char of language) {
  console.log(char);
}



