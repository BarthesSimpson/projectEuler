const arraysMatch = require('./arraysMatch')
const doubleBigNumber = require('./doubleBigNumber')
const input = [9,9,9,4,5,6,7]
const expected = [1,9,9,8,9,1,3,4]

it('correctly doubles large numbers', () => {
  expect(arraysMatch(doubleBigNumber(input), expected)).toBe(true)
})

