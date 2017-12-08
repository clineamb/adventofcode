const fs = require('fs');
const parser = require('./parser.js');
const { TowerNode, Tower } = require('./Tower.js');

let exampleText = fs.readFileSync('./input.txt', 'utf-8');
let data = parser(exampleText);

console.log('BOTTOM:', Tower.getBottom(data));