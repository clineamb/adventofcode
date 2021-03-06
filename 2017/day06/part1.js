const { memdist, loopCounter } = require('./memdist.js');
const fs = require('fs');
const data = fs.readFileSync('./memory.tsv', 'utf-8');

let memoryBank = data.split('\t').map(Number);
let startTime = Date.now();

console.log('========== PART 1 =========');
console.log('START', memoryBank);
console.log('PART 1 COUNT:', memdist(memoryBank.slice(0)));
console.log('PART 2 COUNT:', loopCounter(memoryBank.slice(0)));