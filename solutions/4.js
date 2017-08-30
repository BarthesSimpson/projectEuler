/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

// This is a crappy O(n!) algorithm with a couple of optimizations so I don't feel completely worthless
function largestPalindrome(digits) {
    const max = getMax(digits)
    let maxPal = 0
    for (let i = max; i > 99; i--) {
        // optimization: break outer loop if we can no longer beat maxPal
        if (i < maxPal / max) break
        // optimization: skip multiples of 10 since they can't be palindromes!
        if (i % 10 === 0) continue
        for (let j = i; j > 99; j--) {
            const prod = i * j
            // optimization: break inner loop if we can no longer beat maxPal
            if (prod < maxPal) break
            if (isPalindrome(prod)) {
                maxPal = prod
            }
        }
    }
    return maxPal
}

function getMax(digits) {
    if (digits < 2) {
        throw new Error('Please enter a number greater than 1')
    }
    if (digits > 5) {
        throw new Error(
            'Sorry, my algorithm is too stupid to do that in a reasonable amount of time'
        )
    }
    let max = ''
    for (let i = 0; i < digits; i++) {
        max += '9'
    }
    return parseInt(max)
}

function isPalindrome(number) {
    const str = number.toString()
    return str === Array.from(str).reverse().join('')
}

// console.time('lp')
console.log(largestPalindrome(3))
// console.timeEnd('lp')
