/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const sumDigits = require('../helpers/sumDigits')
const multiplyTwoBigNumbers = require('../helpers/multiplyTwoBigNumbers')

//This works up to 13! and then goes to shit...
function sumDigitsFactorial(n) {
  let currentDigit = 3
  let currentFactorial = [2]
  while (currentDigit < n + 1) {
    multiplier = Array.from(currentDigit.toString()).map(i => parseInt(i))
    currentFactorial = multiplyTwoBigNumbers(currentFactorial, multiplier)
    currentDigit++
  }
  return sumDigits(currentFactorial)
}
console.log(sumDigitsFactorial(100))
