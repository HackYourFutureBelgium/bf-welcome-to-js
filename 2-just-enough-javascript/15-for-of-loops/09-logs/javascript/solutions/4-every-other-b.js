'use strict';

let language = 'j a v a s c r i p t ';

let logIt = '';

// do it

for(let char of language){
  if(char == ' '){
    continue
  }else{
    logIt = char
    console.log(logIt)
  }
}