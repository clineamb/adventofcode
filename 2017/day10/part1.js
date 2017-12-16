const { hash } = require('./twist.js');
const lengths = '212,254,178,237,2,0,1,54,167,92,117,125,255,61,159,164'.split(',').map((n) => { return Number(n); });
let input = [];

for(let i=0; i<256; i++) { input.push(i); }

let hashed = hash(input, lengths);

console.log('First Two', hashed.getFirstTwo());
console.log('Multi 1st 2:', hashed.multiply());