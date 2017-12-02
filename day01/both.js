const fs = require('fs');
const input = fs.readFileSync('./input', 'utf-8');
let sum = 0;
let inputOffset = 1

function roboCompare(i, length, offset) {
  let curr = input.charAt(i);
  let next = input.charAt((i + offset) % length); // circular

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