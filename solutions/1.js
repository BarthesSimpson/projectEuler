/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

const intArray = require('../helpers/intArray')

// Construct an array of all numbers below the ceiling
// Then filter the values that are multiples of the supplied list
// Finally, sum these values

/**
 * Sum all integers below a specified ceiling that are multiples of
 * any of a given list of integers
 * @param {number[]} multiples
 * @param {number} ceiling
 * @returns {number}
 */
function sumOfMultiples(multiples, ceiling) {
  return intArray(ceiling - 1)
    .filter(i => multiples.some(m => i % m === 0))
    .reduce((l, r) => l + r, 0)
}

console.log(sumOfMultiples([3, 5], 10))
console.time('sumOfMultiples')
console.log(sumOfMultiples([3, 5], 1000))
console.timeEnd('sumOfMultiples')
