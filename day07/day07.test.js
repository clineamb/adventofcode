const fs = require('fs');
const path = require('path');
const parser = require('./parser.js');
const { TowerNode, Tower } = require('./Tower.js');
const exampleText = fs.readFileSync(path.join(__dirname, 'sample_input.txt'), 'utf-8');

describe('***** DAY 7 - CHALLENGE *****', () => {
  describe('#parser', () => {

  });

  describe('Tower', () => {
    let data = parser(exampleText);

    it('should have Tower.getBottom return `tknk` w/ example', () => {
      expect(Tower.getBottom(data)).toEqual('tknk');
    });
  });
});