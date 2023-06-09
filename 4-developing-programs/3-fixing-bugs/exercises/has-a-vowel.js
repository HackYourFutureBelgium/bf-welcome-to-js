'use strict';

/* has a vowel

  a user can enter text and learn if it contains at least one vowel
  - given the user cancels, they are prompted again
  - given their input has no vowels, they are told it has none
  - given their input has at least one vowel, they are told so

  test cases:
    '' -> '"" has no vowels'
    'xyz' -> '"xyz" has no vowels'
    '!.-.!' -> '"!.-.!" has no vowels'
    'aeiou' -> '"aeiou" has at least one vowel'
    'hi' -> '"hi" has at least one vowel'

  --- experiments ---

  1. FAILING:
      EXPECT:
      ACTUAL:

    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  --- lessons learned ---


*/

let characters = null;

while (!characters) {
  characters = prompt('enter some characters');
}

const vowels = 'aeiouAEIOU';

let hasAVowel = false;

for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
