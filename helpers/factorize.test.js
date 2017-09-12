const factorize = require('./factorize')
const arraysMatch = require('./arraysMatch')
const input = 32
const expected = [1, 2, 4, 8, 16, 32]

it('correctly factorizes integer', () => {
  expect(arraysMatch(factorize(input), expected)).toBe(true)
})