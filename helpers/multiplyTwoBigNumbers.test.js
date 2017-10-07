const arraysMatch = require('./arraysMatch')
const multiplyTwoBigNumbers = require('./multiplyTwoBigNumbers')
const input = [[9, 9, 9, 4, 5, 6, 7], [9, 9, 9, 4, 5]]
const expected = [9, 9, 8, 9, 0, 6, 9, 9, 8, 8, 1, 5]
// const input = [[1, 0, 0], [9, 9]]
// const expected = [9, 9, 0, 0]

it('correctly multiplies two large numbers', () => {
  expect(arraysMatch(multiplyTwoBigNumbers(input[0], input[1]), expected)).toBe(
    true
  )
})
