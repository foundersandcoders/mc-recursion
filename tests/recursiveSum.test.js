const {
  recursiveSum,
} = require('../index.js');

describe('recursiveSum', () => {
  it('when n is 5, returns 15', () => {
    expect(recursiveSum(5)).toBe(15)
  });
  it('when n is 10, returns 55', () => {
    expect(recursiveSum(10)).toBe(55)
  });
  it('when n is 100, returns 5050', () => {
    expect(recursiveSum(100)).toBe(5050)
  });
});
