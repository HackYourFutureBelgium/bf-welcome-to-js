'use strict';

/* Four Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// trace the program a few times with different values

let a = 'Pieter';
// let a = 'Blake';
// let a = 'George';

let b = 'Rabbit';
// let b = 'Wozzeck';
// let b = 'Schoenberg';

let c = a + ' ' + b;

let d = 'hello ' + c;

console.log(d);

d = 'good bye ' + c;

console.log(d);

// | a        | b         | c                 |d                        |
// | -------- | --------  | ----------------- | --------------------    |
// |Pieter,  | Rabbit     |Pieter Rabbit       | hello Pieter Rabbit    |
// |Blake,   | Wozzeck    | Blake Wozzeck      | hello Black Wozzeck    |
// |George   | Schoenberg | George Schoenberg  | hello George Schoenberg |
