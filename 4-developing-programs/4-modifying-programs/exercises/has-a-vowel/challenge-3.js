'use strict';

/*
  modify this program so it uses .toLowerCase to check for consonants

  you can do this by changing the name of one variable, one string, and a conditional check
    and of course the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const consonant = 'bcdfghjklmnpqrstvwxyz';

let hasAConsonant = false;
for (const char of characters) {
  if (consonant.includes(char)) {
    hasAConsonant = true;
    break;
  }
}

if (hasAConsonant) {
  alert('"' + characters + '" has at least one lowerCase consonant');
} else {
  alert('"' + characters + '" has no lowerCase consonants');
}
