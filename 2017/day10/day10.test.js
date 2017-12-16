const { hash } = require('./twist.js');

fdescribe('***** DAY 10 - CHALLENGE *****', () => {
  it('should return 3 and 4 as the first 2 #s on the list', () => {
    let input = [0, 1, 2, 3, 4];
    let lengths = [3, 4, 1, 5];

    expect(hash(input, lengths).getFirstTwo()).toEqual([3, 4]);
    expect(hash(input, lengths).multiply()).toEqual(12);
  });
});