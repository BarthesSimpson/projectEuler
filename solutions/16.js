/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?
*/

const doubleBigNumber = require('../helpers/doubleBigNumber')

//this takes the exponent as argument and calculates the sum of digits of 2^n
function powerDigitSum(n) {
  let ans = [2]
  let exp = 1
  while (exp < n) {
    ans = doubleBigNumber(ans)
    exp++
  }
  return ans.reduce((l, r) => l + r)
}
console.log(powerDigitSum(1000))
