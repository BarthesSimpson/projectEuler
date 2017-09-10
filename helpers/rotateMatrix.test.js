const rotateMatrix = require('./rotateMatrix')
const matricesMatch = require('./matricesMatch')
const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const clockwise = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
const counter = [[3, 6, 9], [2, 5, 8], [1, 4, 7]]

it('correctly rotates matrix 90 degrees clockwise', () => {
  expect(matricesMatch(rotateMatrix(input, 'clockwise'), clockwise)).toBe(true)
})

it('correctly rotates matrix 90 degrees counter-clockwise', () => {
  expect(matricesMatch(rotateMatrix(input, 'counter'), counter)).toBe(true)
})
