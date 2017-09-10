const getPrimes = require('./getPrimes')
const arraysMatch = require('./arraysMatch')
const expected_1 = [2, 3, 5, 7]
const expected_2 = [3, 5, 7, 11]
it('getPrimes produces correct array', () => {
    // console.log(getPrimes(12, 3))
    expect(arraysMatch(getPrimes(10), expected_1)).toBe(true)
    expect(arraysMatch(getPrimes(12, 3), expected_2)).toBe(true)
})
