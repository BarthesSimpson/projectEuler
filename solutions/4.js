/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

// This algorithm is O(n^2). There is probably a faster solution
/**
 * Find the largest palindrome made from the product of two numbers with a
 * specified number of digits
 * @param {number} digits - the number of digits each of the two numbers to be multiplied must have
 * @returns {number}
 */
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
  if (digits < 2) throw new Error('Please enter a number greater than 1')
  if (digits > 6) throw new Error('Please enter a number less than 7')
  return Array(digits)
    .fill(9)
    .map((d, i) => d * Math.pow(10, i))
    .reduce((l, r) => l + r, 0)
}

function isPalindrome(number) {
  const str = number.toString()
  return (
    str ===
    Array.from(str)
      .reverse()
      .join('')
  )
}

console.log(largestPalindrome(3))
