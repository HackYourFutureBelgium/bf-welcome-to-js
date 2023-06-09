'use strict';

/* -- declare program variables -- 
- if the user press cancel the prompt show again and again
- the prompt asking to enter an adjective
- the prompt asking to enter a noun
- the prompt asking to enter a verb
- if the user enter all these its will show all the answer together

*/
let madlib = '';

let noun = null;
let adjective = null;
let verb = null;

/* -- fill in the adjective -- */

while (adjective === null) {
  adjective = prompt('enter an adjective');
}

madlib = 'the ' + adjective;

/* -- fill in the noun -- */

while (noun === null) {
  noun = prompt('enter a noun');
}

madlib = madlib + ' ' + noun;

/* -- fill in the verb -- */

while (verb === null) {
  verb = prompt('enter a verb');
}

madlib = madlib + ' likes to ' + verb;

/* -- make the user laugh -- */

alert(madlib);
