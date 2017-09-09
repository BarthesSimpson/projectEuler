/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

const intArray = require('../helpers/intArray')

// Construct an array of all numbers below the ceiling
// Then filter the values that are multiples of the supplied list
// Finally, sum these values
function sumOfMultiples(multiples, ceiling) {
    return intArray(ceiling)
        .filter(i => {
            for (let m of multiples) {
                if (i % m === 0) {
                    return true
                }
            }
            return false
        })
        .reduce((l, r) => l + r, 0)
}

console.log(sumOfMultiples([3, 5], 1000))
