// Day 2

const fs = require('fs');
const tsvData = fs.readFileSync('./input.tsv', 'utf-8');
const { checksum, checkmod } = require('./checkrows.js');

let tsv = tsvData.split('\n');
tsv = tsv.map((row) => { 
  return row.split('\t').map(Number);
});

console.log('Part 1:', checksum(tsv));
console.log('Part 2:', checkmod(tsv));