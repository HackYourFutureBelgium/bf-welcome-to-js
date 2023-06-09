'use strict';

let letters = 'a b c d';

let index = 0;

while (index < letters.length) {
  let currentChar = letters[index];
  if (currentChar !== " ") {
    console.log("/" + currentChar + "/");
  }
  index++;
}
