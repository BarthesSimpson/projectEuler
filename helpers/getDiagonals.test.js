const getDiagonals = require('./getDiagonals')
const matricesMatch = require('./matricesMatch')
const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const expected = [[7], [4, 8], [1, 5, 9], [2, 6], [3], [1], [2, 4], [3, 5, 7], [6, 8], [9]]

it('correctly enumerates diagonals', () => {
  expect(matricesMatch(getDiagonals(input), expected)).toBe(true)
  expect(matricesMatch(getDiagonals(input), input)).toBe(false)
})