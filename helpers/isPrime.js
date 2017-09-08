const primeNumbers = require('../tables/primeNumbers')
module.exports = num => {
  if (num > 1e6) {
    throw new Error('this method only works for numbers less than 1e6')
  }
  return primeNumbers.includes(num)
}