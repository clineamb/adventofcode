const { spiralStepCount } = require('./spiral.js');

fdescribe('***** DAY 3 *****', ()=> {
  describe('Part 1 - Spiral Step Counting', () => {
    let cases = [
      [1, 0],
      [12, 3],
      [23, 2],
      [1024, 31]
    ];

    cases.forEach(([input, steps]) => {
      it(`should take ${steps} steps to carry input=${input}`, () => {
        expect(spiralStepCount(input)).toBe(steps);
      });
    });
  });
});