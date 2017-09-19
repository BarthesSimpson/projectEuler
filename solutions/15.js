/*
Starting in the top left corner of a 2×2 grid, and only being able to move 
to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
*/

// This is just a simple combinatorics problem. The solution is 40 choose 20.
// The general solution is 2m choose m, because for each m squares along the diagonal
// there are two possible moves (total 2m), and for each square choosing either move
// will do. So you choose any m of the total 2m moves.

// Here's a DP solution

function latticePaths(m, n) {
  let grid = Array(m + 1)
    .fill(0)
    .map(i => Array(n + 1).fill(0))
  for (let i = 0; i < m + 1; i++) {
    grid[i][0] = 1
  }
  for (let j = 0; j < n + 1; j++) {
    grid[0][j] = 1
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
    }
  }
  return grid[m][n]
}

console.log(latticePaths(20, 20))
