'use strict';

/*
  modify this program so it only checks for upper-case vowels

  you can do this by changing one line and the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const vowels = 'AEIOU';

let hasAVowel = false;
for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one upperCase vowels');
} else {
  alert('"' + characters + '" has no upperCase vowels');
}

