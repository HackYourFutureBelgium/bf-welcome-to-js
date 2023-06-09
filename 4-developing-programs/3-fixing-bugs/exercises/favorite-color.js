'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

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
while (characters === null) {
characters = prompt('Enter some characters');
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