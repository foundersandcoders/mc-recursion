const logItAll = arr => {
  if (arr.length <= 0) {
    return;
  }
  console.log(arr[0]);
  logItAll(arr.slice(1));
};

// recursiveSum :: Number -> Number
const recursiveSum = n => {
  if (n === 0) {
    return 0;
  }
  return n + recursiveSum(n - 1);
};

// map :: (a -> b) -> [a] -> [b]
const map = (f, arr) => {
  if (arr.length === 0) {
    return [];
  } else {
    return [f(arr[0])].concat(map(f, arr.slice(1)));
  }
};

const fib = n => {
  if (n === 0) {
    return n;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

// (a -> b -> a) -> a -> [b] -> a
const reduce = (f, acc, arr) => {
  if (arr.length === 0) {
    return acc;
  } else {
    return reduce(f, f(acc, arr[0]), arr.slice(1));
  }
};

const reduceMap = (f, arr) => {
  const accumulatorFunction = (a, b) => a.concat(f(b));
  return reduce(accumulatorFunction, [], arr);
};

module.exports = {
  logItAll,
  recursiveSum,
  map,
  fib,
  reduce,
  reduceMap
};
