const roboCompare = require('./roboCompare.js');

describe('Day 01 Challenge', () => {
  describe('Part 1 (offset 1, default)', () => {
    const part1Tests = [
      { captcha: '1122', code: 3 },
      { captcha: '1111', code: 4 },
      { captcha: '1234', code: 0 },
      { captcha: '91212129', code: 9 },
    ];

    part1Tests.forEach(({captcha, code}) => {
      it(`captcha ${captcha} should return code ${code}`, () => {
        expect(
          roboCompare(captcha)
        ).toBe(code);
      });
    });
  });

  describe('Part 2 (offset halfway)', () => {
    const part1Tests = [
      { captcha: '1212', code: 6 },
      { captcha: '1221', code: 0 },
      { captcha: '123425', code: 4 },
      { captcha: '123123', code: 12 },
      { captcha: '12131415', code: 4 },
    ];

    part1Tests.forEach(({captcha, code}) => {
      it(`captcha ${captcha} should return code ${code}`, () => {
        expect(
          roboCompare(captcha, captcha.length/2)
        ).toBe(code);
      });
    });
  });
});