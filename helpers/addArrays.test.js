const addArrays = require('./addArrays')
const arraysMatch = require('./arraysMatch')
const input1a = [1, 2, 3, 4]
const input1b = [2, 3, 4, 5]
const result1 = [3, 5, 7, 9]
const input2a = [9, 9, 9, 9]
const input2b = [9, 9, 9, 9]
const result2 = [1, 9, 9, 9, 8]

it('runs tests', () => {
  expect(1).toBeTruthy()
})

it('Correctly adds two arrays', () => {
  const sum1a = addArrays(input1a, input1b)
  const sum1b = addArrays(input1b, input1a)
  expect(arraysMatch(sum1a, sum1b)).toBe(true)
  expect(arraysMatch(sum1a, result1)).toBe(true)
})
it('Correctly adds two arrays when carrying is required', () => {
  const sum2a = addArrays(input2a, input2b)
  const sum2b = addArrays(input2b, input2a)
  expect(arraysMatch(sum2a, sum2b)).toBe(true)
  expect(arraysMatch(sum2a, result2)).toBe(true)
})
