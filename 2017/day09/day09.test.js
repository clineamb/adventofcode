const { scoreStream } = require('./streamParser.js');

describe('***** DAY 9 - CHALLENGE *****', () => {
  describe('#streamParser', () => {
    let cases = [
      { g: '{}', score: 1 },
      { g: '{{{}}}', score: 6 },
      { g: '{{},{}},', score: 5 },
      { g: '{{{},{},{{}}}}', score: 16 },
      { g: '{<{},{},{{}}>}', score: 1 },
      { g: '{<a>,<a>,<a>,<a>}', score: 1 },
      { g: '{{<a>},{<a>},{<a>},{<a>}}', score: 9 },
      { g: '{{<!>},{<!>},{<!>},{<a>}}', score: 3 },
      { g: '{{<ab>},{<ab>},{<ab>},{<ab>}}', score: 9 },
      { g: '{{<!!>},{<!!>},{<!!>},{<!!>}}', score: 9 },
      { g: '{{<a!>},{<a!>},{<a!>},{<ab>}}', score: 3 },
    ];

    cases.forEach(({g, score}, idx) => {
      let s = scoreStream(g);
      it(`(${idx}) should count groups & score correctly`, () => {
        expect(s.score).toBe(score);
      });
    });
  });
});