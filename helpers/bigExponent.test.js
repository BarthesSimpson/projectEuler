const bigExponent = require('./bigExponent')
const arraysMatch = require('./arraysMatch')
const input1 = 9
const input2 = 9
const expected = 387420489
const input3 = 2
const input4 = 53
const expected2 = [9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 2] //one bigger than the max safe int!
const expected3 = '9007199254740992'

it('correctly calculates exponent below MAX_SAFE_INT', () => {
  expect(bigExponent(input1, input2)).toBe(expected)
})
it('correctly calculates exponent above MAX_SAFE_INT', () => {
  expect(arraysMatch(bigExponent(input3, input4), expected2)).toBe(true)
})
it('can give a string output too', () => {
  expect(bigExponent(input3, input4, true)).toBe(expected3)
})
