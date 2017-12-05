const { stepper, stepperOffset } = require('./stepper.js');

fdescribe('***** DAY 5 *****', () => {
  var instructions;

  beforeEach(() => {
    instructions = [0, 3, 0, 1, -3];
  });

  describe('Part 1 - Basic Stepping', () => {
    it(`should take 5 steps to get through ${instructions}`, () => {
      expect(stepper(instructions)).toBe(5);
      expect(instructions).toEqual([2, 5, 0, 1, -2]);
    });
  });

  describe('Part 2 - Offset Stepping', () => {
    it(`should take 10 steps to get through ${instructions}`, () => {
      expect(stepperOffset(instructions)).toBe(10);
      expect(instructions).toEqual([2, 3, 2, 3, -1]);
    });
  });
});