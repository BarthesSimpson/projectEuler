// this rotates a matrix 90 degrees clockwise or counter
// see https://stackoverflow.com/a/8664879/3220303
const transpose = require('./transpose')

module.exports = (matrix, dir) => {

  return dir === 'counter'
    ? transpose(matrix.map(r => r.reverse()))
    : transpose(matrix).map(r => r.reverse())
}