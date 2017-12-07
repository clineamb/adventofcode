const fs = require('fs');
const parser = require('./parser.js');

let exampleText = fs.readFileSync('./sample_input.txt', 'utf-8');
let data = parser(exampleText);

