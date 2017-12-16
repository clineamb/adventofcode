const fs = require('fs');
const path = require('path');
const parser = require('./parser.js');
const {routine}  = require('./Registers.js');
const exampleText = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

let data = parser(exampleText);
let registers = routine(data);

console.log(registers.getAll());
console.log('PART 1:', registers.getLargestRegister());
console.log('PART 2:', registers.getHighest());