const fs = require('fs');
const path = require('path');
const {scoreStream}  = require('./streamParser.js');
const input = fs.readFileSync(path.join(__dirname, 'stream.txt'), 'utf-8');

console.log('STREAM:', scoreStream(input));