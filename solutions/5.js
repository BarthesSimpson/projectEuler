/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const getPrimes = require('../helpers/getPrimes')

// Do prime factorization then multiply the result
/**
 * Find the smallest positive number that is divisible by all
 * numbers in a specified range
 * @param {number} ceil - ceiling of the range (inclusive)
 * @param {number} floor - floor of the range (inclusive)
 * @returns {number}
 */
function smallestMultiple(ceil, floor = 1) {
  const primes = getPrimes(ceil, floor)
  return primes.reduce((l, r) => {
    let power = 1
    while (power < ceil && r ** power < ceil) {
      power++
    }
    return l * r ** --power
  }, 1)
}

console.log(smallestMultiple(20))
