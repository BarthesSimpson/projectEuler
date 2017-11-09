const subtractArrays = require('./subtractArrays')
const arraysMatch = require('./arraysMatch')
const input1a = [3, 5, 7, 9]
const input1b = [2, 3, 4, 5]
const result1 = [1, 2, 3, 4]
const input2a = [1, 9, 9, 9, 8]
const input2b = [9, 9, 9, 9]
const result2 = [9, 9, 9, 9]

it('Correctly subtracts two arrays', () => {
  const sub1 = subtractArrays(input1a, input1b)
  expect(arraysMatch(sub1, result1)).toBe(true)
})
it('Correctly subtracts two arrays when carrying is required', () => {
  const sub2 = subtractArrays(input2a, input2b)
  expect(arraysMatch(sub2, result2)).toBe(true)
})
it('Throws an error when attempting to subtract a larger array from a smaller', () => {
  expect(() => subtractArrays(input2b, input2a)).toThrow()
})
