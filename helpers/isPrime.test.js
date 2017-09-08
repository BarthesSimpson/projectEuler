const isPrime = require('./isPrime')
const getPrimes = require('./getPrimes')
const intArray = require('./intArray')
const arraysMatch = require('./arraysMatch')

it('correctly categorizes numbers by primality', () => {
  const primeArray = getPrimes(100);
  const testArray = intArray(100).filter(i => isPrime(i))
  expect(arraysMatch(primeArray, testArray)).toBe(true)
})