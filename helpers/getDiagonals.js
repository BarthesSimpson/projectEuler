// This starts at the bottom left corner and walks up the rows then across the columns,
// enumerating all diagonals along the way
// Then it starts again but this time from the top left corner, 
// walking along the columns then down the rows
// So e.g. for a 3 x 3 matrix:
//    1 2 3
//    4 5 6
//    7 8 9
//
// we get [7], [4, 8], [1, 5, 9], [2, 6], [3], [1], [2, 4], [3, 5, 7], [6, 8], [9]

const rotateMatrix = require('./rotateMatrix')

module.exports = matrix => {
  return buildDiags(matrix).concat(buildDiags(rotateMatrix(matrix, 'counter')))
}

function buildDiags(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  return climbRows(matrix, m).concat(traverseColumns(matrix, n).slice(1, n))
}

function climbRows(matrix, m) {
  const diags = []
  for (let i = m - 1; i >= 0; i--) {
    const diag = []
    for (let j = 0; j < m - i; j++) {
      diag.push(matrix[i + j][j], )
    }
    diags.push(diag)
  }
  return diags
}

function traverseColumns(matrix, n) {
  const diags = []
  for (let i = 0; i < n; i++) {
    const diag = []
    for (let j = 0; j < n - i; j++) {
      diag.push(matrix[j][i + j], )
    }
    diags.push(diag)
  }
  return diags
}


