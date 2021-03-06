/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

// I already have a helper method that uses sieve of Eratosthenes to calculate all
// primes up to a ceiling, so this is pretty straightforward.
const getPrimes = require('../helpers/getPrimes')
/**
 * Find the sum of primes in some range
 * @param {number} ceil - ceiling of the range (inclusive)
 * @param {number} [floor] - floor of the range (inclusive)
 * @returns {number}
 */
function sumPrimes(ceil, floor = 2) {
  return getPrimes(ceil, floor).reduce((l, r) => l + r, 0)
}

console.log(sumPrimes(2e6))
