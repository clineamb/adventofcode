const { passphraseCheck, anagramCheck } = require('./passphraseCheck.js');

describe('***** DAY 4 *****', () => {
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
    const cases = [
      { phrase: 'abcde fghij', validResult: true },
      { phrase: 'abcde xyz ecdab', validResult: false },
      { phrase: 'a ab abc abd abf abj', validResult: true },
      { phrase: 'iiii oiii ooii oooi oooo', validResult: true },
      { phrase: 'oiii ioii iioi iiio', validResult: false }
    ];
    cases.forEach(({phrase, validResult}) => {
      it(`'${phrase}' should ${(!validResult ? 'NOT' : '')} be valid`, () => {
        expect(anagramCheck(phrase)).toBe(validResult);
      });
    });
  });
});