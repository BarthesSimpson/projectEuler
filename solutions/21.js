/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
Evaluate the sum of all the amicable numbers under 10000.
*/

const factorize = require('../helpers/factorize')
const intArray = require('../helpers/intArray')

function amicableNumbers(ceil) {
  return (
    intArray(ceil)
      .map(i => factorize(i))
      .slice(1)
      .map(r => r.reduce((l, r, i, arr) => (i < arr.length - 1 ? l + r : l)), 0)
      .reduce((l, r, i, arr) => {
        const a = arr[i - 1]
        const b = arr[a - 1]
        // Have to filter out the perfect numbers!!
        return a !== b && b === i ? l.concat([b, i]) : l
      }, [])
      .reduce((l, r) => l + r, 0) / 2
  )
}
console.log(amicableNumbers(10000))
