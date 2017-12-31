const primeFactorize = require('./primeFactorize')
const arraysMatch = require('./arraysMatch')
const inputs = [9, 15, 16, 100]
const outputs = [[3, 3], [3, 5], [2, 2, 2, 2], [2, 2, 5, 5]]

it('correctly calculates prime factors of an integer', () => {
  inputs.forEach((input, index) => {
    expect(arraysMatch(primeFactorize(input), outputs[index])).toBe(true)
  })
})
