const {
  fib,
} = require('../index.js');


describe('fibonaci function', () => {
  it('10th fibonacci is 55', () => {
    expect(fib(10)).toEqual(55);
  });
  it('20th fibonacci is 6765', () => {
    expect(fib(20)).toEqual(6765);
  });
  it('30th fibonacci is 832040', () => {
    expect(fib(30)).toEqual(832040);
  });
});

