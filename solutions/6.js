/*
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const intArray = require('../helpers/intArray')

/**
 * Find the difference between the sum of squares and the 
 * square of the sum of natural numbers up to a ceiling 
 * @param {number} ceil - ceiling of the range (inclusive)
 * @returns {number}
 */
// Smart Solution
function sumDiffSmart(ceil) {
    const sum = ceil * (ceil + 1) / 2
    const sumsq = (2 * ceil + 1) * (ceil + 1) * ceil / 6
    return sum ** 2 - sumsq
}

// Naive Solution
function sumDiffNaive(ceil) {
    return squareSum(ceil) - sumSquare(ceil)
}

function squareSum(ceil) {
    const sum = intArray(ceil).reduce((l, r) => l + r)
    return sum ** 2
}

function sumSquare(ceil) {
    return intArray(ceil).reduce((l, r) => l + (r ** 2))
}

// console.log(sumDiffSmart(10))
console.log(sumDiffSmart(100))

// console.time('naive')
// sumDiffNaive(1e7)           //<---- about 60,000 times slower at n = 1e7!
// console.timeEnd('naive')

// console.time('smart')
// sumDiffSmart(1e7)
// console.timeEnd('smart')
