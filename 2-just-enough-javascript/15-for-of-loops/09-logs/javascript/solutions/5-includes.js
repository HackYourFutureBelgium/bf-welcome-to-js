'use strict';

let allowed = 'arvjstcpi';

let jumble = '3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?';

for (let char of jumble) {
  if (allowed.includes(char.toLowerCase()) && char === char.toLowerCase()) {
    console.log(char);
  }
}
