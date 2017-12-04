const fs = require('fs');
const data = fs.readFileSync('./passphrases', 'utf-8');
const passphraseCheck= require('./passphraseCheck.js');

let phrases = data.split('\n');
let count = 0;

phrases.forEach((phrase) => {
  if(passphraseCheck(phrase)) {
    count++;
  }
});

console.log('>> COUNT:', count);