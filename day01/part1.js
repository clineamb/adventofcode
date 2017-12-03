/***
  DAY 1: http://adventofcode.com/2017/day/1

  For example:

  * 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit
    and the third digit (2) matches the fourth digit.
  * 1111 produces 4 because each digit (all 1) matches the next.
  * 1234 produces 0 because no digit matches the next.
  * 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
***/

const fs = require('fs');
const roboCompare = require('./roboCompare.js');
const startTime = Date.now();

//  Let's start!
fs.readFile('./input', 'utf-8', (err, data) => {
  if(err) {
    console.log('>> Problem reading the file!');
    return process.exit(-1);
  }

  console.log(`>> Robot Code: ${roboCompare(data)}`);
  console.log(`>> Done in ... ${(Date.now() - startTime)} ms`);
  return process.exit();
});