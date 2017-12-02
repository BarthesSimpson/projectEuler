const multiplyTwoBigNumbers = require('../helpers/multiplyTwoBigNumbers')

function bigExponent(a, b, string) {
  let simple = a ** b
  if (simple < Number.MAX_SAFE_INTEGER)
    return string ? simple.toString() : simple
  let res = a
  let rem = b
  let tmp
  while (res < Number.MAX_SAFE_INTEGER) {
    tmp = res
    res = res * a
    rem--
  }
  res = Array.from('' + tmp).map(d => parseInt(d))
  while (rem) {
    res = multiplyTwoBigNumbers(res, [a])
    rem--
  }
  return string ? res.join('') : res
}

module.exports = bigExponent
