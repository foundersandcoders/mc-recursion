const { reduceMap } = require('../index');

describe('map', () => {
  it('Can run add a number to all items in an array', () => {
    expect(reduceMap(x => x + 1, [0,3,4]))
      .toEqual([1,4,5]);
  });

  it('Can uppercase all strings in an array', () => {
    expect(reduceMap(x => x.toUpperCase(), ['the', 'moon', 'is']))
      .toEqual(['THE', 'MOON', 'IS']);
  });
});
