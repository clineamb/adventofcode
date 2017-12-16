const fs = require('fs');
const roboCompare = require('./roboCompare.js');
const startTime = Date.now();

//  Let's start!
fs.readFile('./input', 'utf-8', (err, data) => {
  if(err) {
    console.log('>> Problem reading the file!');
    return process.exit(-1);
  }

  let result = roboCompare(data, data.length/2);

  console.log(`>> Robot Code: ${result}`);
  console.log(`>> Done in ... ${(Date.now() - startTime)} ms`);
  return process.exit();
});