const arraysMatch = require('./arraysMatch')
it('arraysMatch approves only matching arrays', () => {
    expect(arraysMatch([0, 1], [0, 1])).toBe(true)
    expect(arraysMatch([0, 1], [1, 1])).toBe(false)
})
