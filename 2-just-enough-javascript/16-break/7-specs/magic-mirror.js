console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
while (true) {
  const userInput = prompt('Please enter a non-empty string (or cancel to exit):');

  if (userInput === null) {
    alert('Operation canceled.');
    continue;
  }

  if (userInput === '') {
    alert('Invalid input. Please enter a non-empty string.');
    continue;
  }

  input = userInput;
  break;
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  if (/[a-zA-Z]/.test(char)) {
    output += char;
  }
}
output += '|' + output.split('').reverse().join('');

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');