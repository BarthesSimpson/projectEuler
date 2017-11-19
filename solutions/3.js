/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

// LPF of a number must be either the number itself or at most the sqrt of the number
// So, here is a simple recursive approach
/**
 * Recursively find the largest prime factor of a number
 * @param {number} val - the current candidate for LPF
 * @param {number} divisor - a base divisor against which to test val for prime-ness
 * @returns {number}
 */
function largestPrimeFactor(val, divisor = 2) { 
    
    // count up to the sqrt of the search value until we find a divisor
    while ((val % divisor) !== 0 && divisor**2 <= val) {
        divisor++
    }

    // if we already exceeded the square root of the search value, we have found the LPF
    // otherwise, divide by the divisor and recurse
    return divisor**2 <= val
        ? largestPrimeFactor(val / divisor, divisor)
        : val
}

console.log(largestPrimeFactor(600851475143))