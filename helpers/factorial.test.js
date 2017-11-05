const factorial = require('./factorial')
const testCases = {
  0: 1,
  1: 1,
  5: 120,
  10: 3628800
}

it('Correctly computes factorials', () => {
  Object.keys(testCases).forEach(k => {
    expect(factorial(k)).toEqual(testCases[k])
  })
})
