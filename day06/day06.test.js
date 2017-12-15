const { memdist, loopCounter } = require('./memdist.js');

xdescribe('***** DAY 6 *****', () => {
  describe('part 1 - memdist', () => {
    let bank = [0, 2, 7, 0];
    let endState = [2, 4, 1, 2];

    it('should distribute 5 times before we we see the same state', () => {
      expect(memdist(bank)).toBe(5);
    });
    it('should match [2, 4, 1, 2] at the end', ()=>{
      expect(bank).toEqual(endState);
    });
  });

  describe('part 2 - loopCounter', () => {
    let bank = [0, 2, 7, 0];
    
    it('should have a loop of 4', () => { 
      expect(loopCounter(bank)).toBe(4);
    });
  });
});