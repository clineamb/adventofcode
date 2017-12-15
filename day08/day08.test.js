const fs = require('fs');
const path = require('path');
const parser = require('./parser.js');
const {routine}  = require('./Registers.js');
const exampleText = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8');

describe('***** DAY 8 - CHALLENGE *****', () => {
  let data = parser(exampleText);
  let reg = routine(data);

  it('should get the largest value in all registers', () => {
    expect(reg.getLargestRegister().value).toBe(1);
  });

  it('should get the highest value ever stored', () => {
    expect(reg.getHighest()).toBe(10);
  })
});