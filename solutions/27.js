/*
Euler discovered the remarkable quadratic formula:

n2+n+41n2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤390≤n≤39. However, when n=40,402+40+41=40(40+1)+41n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤790≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+bn2+an+b, where |a|<1000|a|<1000 and |b|≤1000|b|≤1000

where |n||n| is the modulus/absolute value of nn
e.g. |11|=11|11|=11 and |−4|=4|−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of nn, starting with n=0n=0.
*/

/**
 * Find the product of the coefficients a and b for the quadratic expression
 * that produces the maximum number of primes for consecutive values of n,
 * starting with n=0
 * @returns {number}
 */
function productOfQuadraticCoefficients() {
  let product = 0
  let maxPrimes = 0
  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b < 1001; b++) {
      let n = 0
      while (isPrime(n ** 2 + a * n + b)) {
        n++
      }
      if (n > maxPrimes) {
        product = a * b
        maxPrimes = n
      }
    }
  }
  return product
}

/**
 * Check whether a number is prime without having to go through the entire
 * table of primes!
 * @param {number} n - the number we are testing for primeness
 * @returns {bool}
 */
const primeNumbers = require('../tables/primeNumbers')
function isPrime(n) {
  let i = 0
  while (primeNumbers[i] <= n) {
    if (primeNumbers[i] === n) {
      return true
    }
    i++
  }
  return false
}

// console.time('yay')
console.log(productOfQuadraticCoefficients())
// console.timeEnd('yay')
