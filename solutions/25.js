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
 * @param {number} n - the desired number of digits
 * @returns {number} 
 */

const multiplyTwoBigNumbers = require("../helpers/multiplyTwoBigNumbers")

function nDigitFib(n) {
  let i = 3
  let fib_i = [2]
  let fib_i_minus = [1]
  let lookahead = [i, fib_i, fib_i_minus]

  // First use fastFib to get close to our target
  while (fib_i.length < n) {
    lookahead = fastFib(i, fib_i, fib_i_minus)
    let tally = 0
    if (lookahead[1].length === n) {
      if (lookahead[2].length === n - 1) {
          console.log('early exit')
        return lookahead[0]
      } else if (lookahead[2].length === n) {
        break
      }
    } else {
      [i, fib_i, fib_i_minus] = lookahead
    }
  }
  // If we reached this point and didn't hit the nail on the head,
  // we need to switch to slowFib
  while (fib_i.length < n) {
    [i, fib_i, fib_i_minus] = slowFib(i, fib_i, fib_i_minus)
  }
  return i
}

function slowFib(i, fib_i, fib_i_minus) {
  return [i + 1, fib_i + fib_i_minus, fib_i]
}

function fastFib(i, fib_i, fib_i_minus) {
  const fib_double = fib_i_minus * (2 * fib_i - fib_i_minus)
  const fib_double_plus = fib_i ** 2 + fib_i_minus ** 2
  return [i * 2 + 1, fib_double_plus, fib_double]
}

console.log(nDigitFib(4))