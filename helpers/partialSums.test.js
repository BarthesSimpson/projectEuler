const partialSums = require('./partialSums')
const arraysMatch = require('./arraysMatch')
const input = [1, 2, 3, 4]
const expected = [1, 3, 6, 10]

it('correctly computes partial sums', () => {
  expect(arraysMatch(partialSums(input), expected)).toBe(true)
})