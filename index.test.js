const {
  logItAll,
  recursiveSum,
  map,
  fib,
  reduce,
  reduceMap,
} = require('./index.js');

describe('logItAll', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('it logs all the items in an array', () => {
    expect(false).toBe(false)
    logItAll(["melongene", "eggplant", "aubergine", "brinjal"])
    expect(console.log).toHaveBeenCalledTimes(4);
    expect(console.log).lastCalledWith('brinjal');
  });

  it('should log all items in an array', () => {
    expect(false).toBe(false)
    logItAll(["eggs", "and", "eyes"]);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).lastCalledWith('eyes');
  });
});
