// #todo

 'use strict';

// /*
//   log the user's phrase
//   log which type of search they wanted
//   log their search query
//   log whether or not the query was found in their phrase
// */

// let phrase = '';

// let userConfirmedPhrase = false;
// while (!userConfirmedPhrase) {
//   phrase = prompt('enter a phrase to search');
//   if (phrase === null) {
//     continue;
//   }

//   userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');
// }

// const caseSensitive = confirm('do you want a case-sensitive search?');

// let query = '';

// let userConfirmedQuery = false;
// while (!userConfirmedQuery) {
//   query = prompt(
//     'enter a search query, this program will check if it exists in your phrase',
//   );
//   if (query === null) {
//     continue;
//   }

//   userConfirmedQuery = confirm('is this correct: "' + query + '"');
// }

// let phraseIncludesQuery;
// if (caseSensitive) {
//   phraseIncludesQuery = phrase.includes(query);
// } else {
//   const lowerCasePhrase = phrase.toLowerCase();
//   const lowerCaseQuery = query.toLowerCase();
//   phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
// }

// let doesOrNot = '';
// if (phraseIncludesQuery) {
//   doesOrNot = 'does';
// } else {
//   doesOrNot = 'does not';
// }

// alert(
//   '"' +
//     phrase +
//     '" ' +
//     doesOrNot +
//     ' include "' +
//     query +
//     '"\n\n' +
//     'case sensitive: ' +
//     caseSensitive,
// );

'use strict';

/*
  log the user's phrase
  log which type of search they wanted
  log their search query
  log whether or not the query was found in their phrase
*/

let phrase = '';

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  phrase = prompt('Enter a phrase to search');
  if (phrase === null) {
    continue;
  }

  userConfirmedPhrase = confirm('Is this correct: "' + phrase + '"');
}

console.log('User entered phrase:', phrase);

const caseSensitive = confirm('Do you want a case-sensitive search?');

console.log('Case-sensitive search:', caseSensitive);

let query = '';

let userConfirmedQuery = false;
while (!userConfirmedQuery) {
  query = prompt('Enter a search query, this program will check if it exists in your phrase');
  if (query === null) {
    continue;
  }

  userConfirmedQuery = confirm('Is this correct: "' + query + '"');
}

console.log('User entered search query:', query);

let phraseIncludesQuery;
if (caseSensitive) {
  phraseIncludesQuery = phrase.includes(query);
} else {
  const lowerCasePhrase = phrase.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
}

console.log('Query found in the phrase:', phraseIncludesQuery);

let doesOrNot = phraseIncludesQuery ? 'does' : 'does not';

alert(
  '"' +
  phrase +
  '" ' +
  doesOrNot +
  ' include "' +
  query +
  '"\n\n' +
  'Case sensitive: ' +
  caseSensitive,
);
