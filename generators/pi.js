// π/4 = 4 * arctan(1/5) − arctan(1/239)
// power series for arctan: arctan(x) = x − (x^3)/3 + (x^5)/5 − (x^7)/7 + ⋯
// So π/4 = 4 * (1/5 − ((1/5)^3)/3 + ((1/5)^5)/5 − ((1/5)^7)/7 + ⋯) - (1/239 − ((1/239)^3)/3 + ((1/239)^5)/5 − ((1/239)^7)/7 + ⋯)
// So π = 4 * (4 * (1/5 − ((1/5)^3)/3 + ((1/5)^5)/5 − ((1/5)^7)/7 + ⋯) - (1/239 − ((1/239)^3)/3 + ((1/239)^5)/5 − ((1/239)^7)/7 + ⋯))

// Big.js implementation - only works up to 17 d.p.
// despite claims of arbitrary precision
const Big = require('big.js')
Big.DP = 100
/**
 * Generate the digits of pi to precision n
 * @param {number} n - number of digits of precision
 * @returns {string}
 */
const piGenBig = n => {
  if (n > 17) throw new Error('This only works up to 17 decimal places')
  let i = 1
  let x1 = Big(5)
  let x2 = Big(239)
  let taylor1 = Big(1).div(x1)
  let taylor2 = Big(1).div(x2)
  let pi_fourth

  // Not sure how many iterations we need to do to get required precision
  // but this will do
  while (i <= n * 2) {
    taylor1 = taylor1.plus(taylorBig(x1, i))
    taylor2 = taylor2.plus(taylorBig(x2, i))
    pi_fourth = taylor1.times(4).minus(taylor2)
    i++
  }
  return pi_fourth
    .times(4)
    .toString()
    .substring(0, n + 2)
}

/**
 * Generate the next term in the taylor arctan expansion
 * @param {Big} x - the base of the expansion
 * @param {number} i - the iteration
 * @returns {number[]}
 */
const taylorBig = (x, i) => {
  // calculate the exponent
  const e = 1 + 2 * i
  // calculate the denominator
  const d = Big(e).times(x.pow(e))
  // calculate the term
  const t = Big(1).div(d)
  return i % 2 === 0 ? t : -t
}

//POC implementation limited by built-in float precision
/**
 * Generate the digits of pi to precision n
 * @param {number} n - number of digits of precision
 * @returns {number}
 */
const piGenPoc = n => {
  if (n > 11) throw new Error('This only works up to 11 decimal places')
  let i = 1
  let x1 = 1 / 5
  let x2 = 1 / 239
  let taylor1 = x1
  let taylor2 = x2
  let pi_fourth = 0

  while (i <= 13) {
    taylor1 += taylorPoc(x1, i)
    taylor2 += taylorPoc(x2, i)
    pi_fourth = 4 * taylor1 - taylor2
    i++
  }
  return (4 * pi_fourth).toFixed(n)
}

/**
 * Generate the next term in the taylor arctan expansion
 * @param {number} x - the base of the expansion
 * @param {number} i - the iteration
 * @returns {number}
 */
const taylorPoc = (x, i) => {
  // calculate the exponent
  const e = 1 + 2 * i
  // calculate the term
  const t = Math.pow(x, e) / e
  return i % 2 === 0 ? t : -t
}

// console.log(piGen(22))

module.exports = piGenBig
