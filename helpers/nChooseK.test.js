const nChooseK = require('./nChooseK')
const input = [9, 2]
const expected = 36

it('correctly computes nChooseK', () => {
  expect(nChooseK(input[0], input[1])).toEqual(expected)
})