const factorize = require('./factorize')
const arraysMatch = require('./arraysMatch')
const input1 = 32
const expected1 = [1, 2, 4, 8, 16, 32]
const input2 = 4
const expected2 = [1, 2, 4]
const input3 = 5
const expected3 = [1, 5]
const input4 = 2
const expected4 = [1, 2]

it('correctly factorizes integer', () => {
  expect(arraysMatch(factorize(input1), expected1)).toBe(true)
  expect(arraysMatch(factorize(input2), expected2)).toBe(true)
  expect(arraysMatch(factorize(input3), expected3)).toBe(true)
  expect(arraysMatch(factorize(input4), expected4)).toBe(true)
})
