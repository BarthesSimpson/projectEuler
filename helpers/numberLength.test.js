const numberLength = require('./numberLength')
const input1 = 123456789
const input2 = 123456789123456789

it('Correctly returns length of number', () => {
  expect(numberLength(input1)).toEqual(9)
  expect(numberLength(input2)).toEqual(18)
})
