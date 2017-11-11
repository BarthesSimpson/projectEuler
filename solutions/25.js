/*The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

/**
 * Returns the index of the first Fibonacci number with n digits
 * Should be performant due to fast Fibonacci calculation, but is
 * actually kind of slow (c. 600ms) which suggests my array operation
 * helper methods could stand to be optimized
 * @param {number} n - the desired number of digits
 * @returns {number} 
 */

const bigMult = require('../helpers/multiplyTwoBigNumbers')
const doubleBig = require('../helpers/doubleBigNumber')
const addArrays = require('../helpers/addArrays')
const subtractArrays = require('../helpers/subtractArrays')

function nDigitFib(n) {
  let i = 3
  let fib_i = [2]
  let fib_i_minus = [1]

  // First use fastFib to get close to our target
  while (fib_i.length < n) {
    let lookahead = fastFib(i, fib_i, fib_i_minus)
    // if fib_i has >n number of digits, we either
    // hit the nail on the head or overshot
    const len_i = lookahead[1].length
    if (len_i >= n) {
      const len_i_minus = lookahead[2].length
      // case 1: we got lucky
      if (len_i === n && len_i_minus === n - 1) {
        return lookahead[0]
      } else {
        // otherwise, we need to backtrack one step and go to the slow method
        break
      }
      // update the cache after each round of fast fibonacci
    } else {
      ;[i, fib_i, fib_i_minus] = lookahead
    }
  }
  // If we reached this point and didn't hit the nail on the head,
  // we need to switch to slowFib
  while (fib_i.length < n) {
    ;[i, fib_i, fib_i_minus] = slowFib(i, fib_i, fib_i_minus)
  }
  return i
}

function slowFib(i, fib_i, fib_i_minus) {
  return [i + 1, addArrays(fib_i, fib_i_minus), fib_i]
}

function fastFib(i, fib_i, fib_i_minus) {
  const fib_double = bigMult(
    fib_i_minus,
    subtractArrays(doubleBig(fib_i), fib_i_minus)
  )
  const fib_double_plus = addArrays(
    bigMult(fib_i, fib_i),
    bigMult(fib_i_minus, fib_i_minus)
  )
  return [(i - 1) * 2 + 1, fib_double_plus, fib_double]
}

console.log(nDigitFib(1000))
