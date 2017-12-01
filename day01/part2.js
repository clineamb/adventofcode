/***
  DAY 1: http://adventofcode.com/2017/day/1

Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.

For example:

1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
1221 produces 0, because every comparison is between a 1 and a 2.
123425 produces 4, because both 2s match each other, but no other digit has a match.
123123 produces 12.
12131415 produces 4.
***/

/*** WORK IN PROGRRESS ***/


var fs = require('fs');
var startTime = Date.now(); // "25 ms until midnight" check 
var sum = 0;

function compareDigit(curr, halfway) {
  if(curr === halfway) {
    sum += Number(curr);
  }
}

function getRoboCaptcha(input) {
  var i = 0;
  var half = input.length / 2;
  var currIndex;

  while(i < input.length) {
    currIndex = ((i + half) % input.length);
    compareDigit(input.charAt(i), input.charAt(currIndex));
    i++;
  }

  return sum;
}

// Let's start!
fs.readFile('./input', 'utf-8', function(err, data) {
  if(err) {
    console.log('>> Problem reading the file!');
    return process.exit(-1);
  }

  console.log('>> Robot Code:', getRoboCaptcha(data));
  console.log('>> Done in ... ' + (Date.now() - startTime) + ' ms');
  return process.exit();
});