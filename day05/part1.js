const fs = require('fs');
const data = fs.readFileSync('./instructions', 'utf-8');
const { stepper, stepperOffset } = require('./stepper.js');

let instructions = data.split('\n').map((s) => { return parseInt(s) });

console.log('PART 1:', stepper(instructions.slice(0)));
console.log('PART 2:', stepperOffset(instructions.slice(0)));