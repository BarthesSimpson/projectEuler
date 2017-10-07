const sumDigits = require('./sumDigits')
const input1 = 1233456
const input2 = [1, 2, 3, 3, 4, 5, 6]

it('Correctly sums digits', () => {
  expect(sumDigits(input1)).toEqual(24)
  expect(sumDigits(input2)).toEqual(24)
})
