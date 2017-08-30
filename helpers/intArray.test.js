const arraysMatch = require('./arraysMatch')
const intArray = require('./intArray')
const expected_1 = [0, 1, 2, 3]
const expected_2 = [2, 3, 4]
it('intArray produces correct array', () => {
    expect(arraysMatch(intArray(3), expected_1)).toBe(true)
    expect(arraysMatch(intArray(4, 2), expected_2)).toBe(true)
})
