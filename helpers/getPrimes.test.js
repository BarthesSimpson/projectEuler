const getPrimes = require('./getPrimes')
const arraysMatch = require('./arraysMatch')
const expected_1 = [2, 3, 5, 7]
const expected_2 = [3, 5, 7, 11]
const expected_3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
it('getPrimes produces correct array', () => {
    expect(arraysMatch(getPrimes(10), expected_1)).toBe(true)
    expect(arraysMatch(getPrimes(12, 3), expected_2)).toBe(true)
    expect(arraysMatch(getPrimes(30), expected_3)).toBe(true)
})
