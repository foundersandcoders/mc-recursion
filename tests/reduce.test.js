const { reduce } = require('../index');

describe('reduce', () => {
  it('can be used to sum an array', () => {
    expect(reduce((a, b) => a + b, 0, [1,2,3,4])).toEqual(10);
  });

  it('can be used to filter an array', () => {
    expect(reduce((a, b) => {
      if (a.length === 3) {
        return [a].concat(b)
      } else {
        return b
      }
    }, [], ["pumpkin", "pug", "po", "pof"]))
      .toEqual(['pug', 'pof']);
  });
});
