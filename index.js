
// *************
// THE CHALLENGES
// *************



// ****************
// 1 - write a recursive function that will console log each element of an array
// ****************
const logItAll = (arr) => {
 // ??
}


// ****************
// 2 - write a fuction that will recursively add the numbers from 1 to n 
// ****************

// recursiveSum :: Number -> Number
const recursiveSum = (n) => {
  // ???
}

// console.log(recursiveSum(5)) // 15
// console.log(recursiveSum(10)) // 55
// console.log(recursiveSum(100)) // 5050


// ****************
// 3 - define a recursive map function - with data last style arguments
// ****************

// map :: (a -> b) -> [a] -> [b]
const map = (f, arr) => {
 // ?
}

// ****************
// 4 - write a function that will return the nth fibonacci number
// ****************

const fib = (n) => { 
  // ??
}

// ****************
// 5 - define a recursive reduce function - with data last style arguments :)
// this will be hard. Read the type signature. <3
// ****************

// (a -> b -> b) -> b -> [a]
const reduce = (f, acc, arr) => {
  // ??
}


// ****************
// 6 - define a recursive map function - using your reduce function!!
// ****************

const reduceMap = (f, arr) => {
  return reduce(/* ??? */)
}

module.exports = {
  logItAll,
  recursiveSum,
  map,
  fib,
  reduce,
  reduceMap,
}
