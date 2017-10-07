const arraysMatch = require('./arraysMatch')
const multiplyTwoBigNumbers = require('./multiplyTwoBigNumbers')
const input = [[9, 9, 9, 4, 5, 6, 7], [9, 9, 9, 4, 5]]
const expected = [9, 9, 8, 9, 0, 6, 9, 9, 8, 8, 1, 5]

it('correctly multiplies two large numbers', () => {
  // console.log(multiplyTwoBigNumbers([9, 9, 9], [8, 4]))
  expect(arraysMatch(multiplyTwoBigNumbers(input[0], input[1]), expected)).toBe(true)
})
