/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

// this is a bit of a cop-out, but sometimes the easiest option is the best one.
// I used the seive of Eratosthenes to precompute all prime numbers < 10e6
const primeNumbers = require('../tables/primeNumbers')

/**
 * Find the nth prime number 
 * @param {number} n
 * @returns {number}
 */
function nthPrimeNumber(n) {
  return primeNumbers[n]
}

// console.log(nthPrimeNumber(6))
console.log(nthPrimeNumber(10001))