'use strict';

let language = ' j a v a s c r i p t';

let logIt =  true;

for (let char of language) {
   if (char !== ' ') {
  if (logIt) {
  }
  console.log(char);
}
logIt = !logIt;
}
