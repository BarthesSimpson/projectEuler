const sumDigits = require('./sumDigits')
const input = 1233456

it('Correctly sums digits', () => {
  expect(sumDigits(input)).toEqual(24)
})