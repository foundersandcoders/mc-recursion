const {
  map,
} = require('../index.js');

describe('map', () => {
  it('Can run add a number to all items in an array', () => {
    expect(map(x => x + 1, [0,3,4]))
      .toEqual([1,4,5]);
  });

  it('Can uppercase all strings in an array', () => {
    expect(map(x => x.toUpperCase(), ["let", "us", "go", "then"]))
      .toEqual([ 'LET', 'US', 'GO', 'THEN' ]);
  });
});
