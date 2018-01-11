/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

/**
 * Find all the ways a sum can be obtained by combining an array of values
 * aka the easiest knapsack problem
 * 
 * @param {Number} sum
 * @param {Number[]} values
 * 
 * @returns {Number} number of distinct ways of forming sum from values
 */
function easyKnapsack(sum, values) {
  let sum = 0
  for (let i = 9; i < 10 ** 6; i++) {
    const sumFifth = Array.from(i.toString())
      .map(i => i ** 5)
      .reduce((a, b) => a + b, 0)
    if (sumFifth === i) {
      sum += i
    }
  }
  return sum
}
console.log(sumOfPentagonalNumbers())
