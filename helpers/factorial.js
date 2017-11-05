const intArray = require('./intArray')
function factorial(n) {
  if (n < 2) return 1
  return intArray(n, 1).reduce((l, r) => l * r, 1)
}

module.exports = factorial
