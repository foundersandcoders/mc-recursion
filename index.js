
// *************
// THE CHALLENGES
// *************

// INSTRUCTIONS
// uncomment the console logs below the exercise you are working on.
// write the function
// Hit run to test your work


// ****************
// 1 - write a recursive function that will console log each element of an array
// ****************
const logItAll = (arr) => {
 // ??
}

// logItAll(["eggs", "and", "eyes"]) 
// logItAll(["melongene", "eggplant", "aubergine", "brinjal"])
// logItAll([1, 3468643, "something"])



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

// console.log(map(x => x + 1, [1,4,5]))
// [2, 5, 6]

// console.log(map(x => x.toUpperCase(), ["let", "us", "go", "then"]))
// [ 'LET', 'US', 'GO', 'THEN' ]




// ****************
// 4 - write a function that will return the nth fibonacci number
// ****************

const fib = (n) => { 
  // ??
}

// console.log(fib(10)) // 55
// console.log(fib(20)) // 6765
// console.log(fib(30)) // 832040



// ****************
// 5 - define a recursive reduce function - with data last style arguments :)
// this will be hard. Read the type signature. <3
// ****************

// (a -> b -> b) -> b -> [a]
const reduce = (f, acc, arr) => {
  // ??
}

// console.log(reduce((a, b) => a + b, 0, [1,2,3,4])) // 10
// console.log(reduce((a, b) => {
//   if (a.length === 3) {
//     return [a].concat(b)
//   } else {
//     return b
//   }
// }, [], ["pumpkin", "pug", "po", "pip"])) // ['pug', 'pip']


// ****************
// 6 - define a recursive map function - using your reduce function!!
// ****************

const reduceMap = (f, arr) => {
  return reduce(/* ??? */)
}

// console.log(map(x => x * 2, [1,4,5]))
// [2, 8, 10]

// console.log(map(x => x.toUpperCase(), [ 'I', 'should', 'have', 'been', 'a', 'pair', 'of', 'ragged', 'claws' ]))
// [ 'I', 'SHOULD', 'HAVE', 'BEEN', 'A', 'PAIR', 'OF', 'RAGGED', 'CLAWS' ]



