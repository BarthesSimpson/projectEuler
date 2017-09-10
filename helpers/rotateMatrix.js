// this rotates a matrix 90 degrees clockwise or counter
const transpose = require('./transpose')

module.exports = (matrix, dir) => {

  return dir === 'counter'
    ? transpose(matrix.map(r => r.reverse()))
    : transpose(matrix).map(r => r.reverse())
}