const checksum = require('./checksum.js');

fdescribe('Day 2 Challenge', () => {

  describe('Part 1', () => {
    it('should return the expected checksum', () => {
      const sheet = [
        [5, 1, 9, 5],
        [7, 5, 3],
        [2, 4, 6, 8]
      ];

      const expectedCheckSum = 18;
      
      expect(checksum(sheet)).toBe(expectedCheckSum);
    });
  });
});