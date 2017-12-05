const fs = require('fs');
const data = fs.readFileSync('./passphrases', 'utf-8');
const { passphraseCheck, anagramCheck } = require('./passphraseCheck.js');

let phrases = data.split('\n');
let count = 0;

phrases.forEach((phrase) => {
  if(passphraseCheck(phrase)) {
    count++;
  }
});

console.log('>> PART 1 COUNT:', count);

count = 0;

phrases.forEach((phrase) => {
  if(anagramCheck(phrase)) {
    count++;
  }
});

console.log('>> PART 2 COUNT:', count);