/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
012   021   102   120   201   210
What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

const intArray = require('../helpers/intArray')
const factorial = require('../helpers/factorial')
/**
 * Returns the nth lexgographically ordered permutation of a 
 * series of digits starting at zero
 * @param {number} lim - the last digit in the series
 * @param {number} n - the desired permutation
 * @returns {number} 
 */
function nthPermutation(lim, n) {
  const l = lim + 1
  let p = ''
  let remain = n - 1
  let nums = intArray(lim)
  for (let i = 1; i < l; i++) {
    const divisor = factorial(l - i)
    let j = Math.floor(remain / divisor)
    remain %= divisor
    p += nums[j]
    nums.splice(j, 1)
    if (!remain) break
  }
  return p + nums.join('')
}

console.log(nthPermutation(9, 1e6))
