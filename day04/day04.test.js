const passphraseCheck = require('./passphraseCheck.js');

fdescribe('***** DAY 4 *****', () => {
  describe('Part 1 - #passphraseCheck', () => {
    const cases = [
      { phrase: 'aa bb cc dd ee', validResult: true },
      { phrase: 'aa bb cc dd aa', validResult: false },
      { phrase: 'aa bb cc dd aaa', validResult: true },
      { phrase: 'ddd aa bb ee hh z aaa bb', validResult: false },
      { phrase: 'dougw xx 34 dougw z 34 bb', validResult: false },
    ];
    cases.forEach(({phrase, validResult}) => {
      it(`'${phrase}' should ${(!validResult ? 'NOT' : '')} be valid`, () => {
        expect(passphraseCheck(phrase)).toBe(validResult);
      });
    });
  });

  describe('Part 2 - #anagramCheck', () => {
    const cases = [];
  });
});