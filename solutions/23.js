/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

// So basically we need to sum all the numbers below 28123 that cannot be expressed as the
// sum of two abundant numbers.
// 1) calculate abundant numbers < 28123
// 2) calculate numbers < 28123 that can be expressed as sum of two abundants
// 3) sum the other numbers

const factorize = require('../helpers/factorize')
const intArray = require('../helpers/intArray')
function isAbundant(n) {
  const factors = factorize(n)
  return factors.slice(0, factors.length - 1).reduce((l, r) => l + r, 0) > n
}
function nonAbundantSum() {
  const limit = 20161 //the actual upper bound
  const ints = intArray(limit, 1)
  const abundants = ints.filter(n => isAbundant(n))
  let abundantSums = Array(limit).fill(false)
  for (let i = 0; i < abundants.length && abundants[i] <= limit / 2; i++) {
    for (let j = i; j < abundants.length; j++) {
      const sum = abundants[i] + abundants[j]
      if (sum <= limit) {
        abundantSums[sum] = true
      } else break
    }
  }
  return ints.filter(n => !abundantSums[n]).reduce((l, r) => l + r, 0)
}
console.log(nonAbundantSum())
