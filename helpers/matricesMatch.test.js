const matricesMatch = require('./matricesMatch')
const transpose = require('./transpose')
const input = [[0, 1], [1, 0]]

it('correctly checks if two matrices match', () => {
  expect(matricesMatch(input, input)).toBe(true)
  expect(matricesMatch(input, transpose(input))).toBe(true)
})