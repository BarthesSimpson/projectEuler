const transpose = require('./transpose')
const matricesMatch = require('./matricesMatch')
const input = [[1, 2, 3], [4, 5, 6]]
const expected = [[1, 4], [2, 5], [3, 6]]

it('performs transpose operation correctly', () => {
  const output = transpose(input)
  expect(matricesMatch(output, expected)).toBe(true)
  expect(matricesMatch(input, output)).toBe(false)
  expect(matricesMatch(input, transpose(output))).toBe(true)
})