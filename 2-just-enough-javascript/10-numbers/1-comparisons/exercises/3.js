// #todo

'use strict';

//let number = 0;    // number variable is assigned the value 0.
//let number = 0.5; //number variable is assigned the value 0.5
//let number = 1;   // number variable is assigned the value 1
//let number = 1.5; // number variable is assigned the value 1.5
// let number = 2;  // number variable is assigned the value 2
let number = 2.5; //number variable is assigned the value 2.5
// let number = 3;   //number variable is assigned the value 3
// let number = 3.5; //number variable is assigned the value 3.5
// let number = 4;   //number variable is assigned the value 4
// let number = 4.5; //number variable is assigned the value 4.5
// let number = 5;    //number variable is assigned the value 5
// let number = 5.5;  //number variable is assigned the value 5.5
// let number = 6;    //number variable is assigned the value 6

console.log(number + ' between 1 and 2, OR between 4 and 5 (exclusive)'); // read the value of number along with the string ' between 1 and 2, OR between 4 and 5 (exclusive)'

// read the statements to check the conditions and output true or false based on the comparisons:

// number is greater than 1 AND is less than 2 (exclusive)
console.log(number > 1 && number < 2); // checks if number is greater than 1 and less than 2 (exclusive).

// number is greater than 4 AND less than 5 (exclusive)
console.log(number > 4 && number < 5); //  checks if number is greater than 4 and less than 5 (exclusive).

// number between 1 and 2 OR between 4 and 5 (exclusive)
console.log((number > 1 && number < 2) || (number > 4 && number < 5)); //  checks if number satisfies either the condition between 1 and 2 or the condition between 4 and 5 (exclusive).

//number is assigned to  0 in this case, none of the conditions will evaluate to true.
// number is assigned the value 0.5, all three conditions will evaluate to false in this case.
// number is assigned to 1, the first condition evaluates to false while the other two conditions evaluate to true.
// number is assigned to 1.5 , the third condition (number > 1 && number < 2) will evaluate to true, while the other conditions will evaluate to false.
// number is assigned to 2,the first condition will evaluate to false, the second condition will evaluate to false, and the third condition will evaluate to true.
// number is assigned to 2.5 in this case, the first and second conditions will evaluate to false, while the third condition will evaluate to true.
