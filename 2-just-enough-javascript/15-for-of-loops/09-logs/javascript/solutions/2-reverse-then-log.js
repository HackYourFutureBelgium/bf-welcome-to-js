'use strict';

let backwards = 'tpircsavaj';

// use a for-of loop to reverse `backwards`
//  assign the reversed string to `language`
let language = '';
for (let letter of backwards) {
  language = letter + language;
}

// log each character in `language`


for (let char of language) {
  console.log(char);
}