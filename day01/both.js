var fs = require('fs');
var input = fs.readFileSync('./input', 'utf-8');
// var input = '1122';
var sum = 0;
var inputOffset = 1

function roboCompare(i, length, offset) {
  var curr = input.charAt(i);
  var next = input.charAt((i + offset) % length); // circular

  if(curr === next) {
    sum += Number(curr);
  }

  if(i < length) {
    roboCompare(i + 1, length, offset);
  }
}

if(process.argv[2]) {
  if(process.argv[2] === 'half') {
    inputOffset = input.length/2;
  } else if(isNaN( Number(process.argv[2]) )) {
    inputOffset = Number(process.argv[2]);
  }
}

roboCompare(0, input.length, inputOffset);
console.log('>> Robot Code:', sum);