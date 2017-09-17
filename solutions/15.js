/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
*/

// I didn't code a solution for this because it is a simple combinatorics
// problem (40 choose 20). The general solution is 2m choose m, because
// for each square along the diagonal (total m) there are two possible moves
// (total 2m), only one of which (total m) brings you closer to the goal.

// Were I coding a solution, some kind of DP or divide & conquer approach
// would make sense.

// Update: Here's an elegant DP solution

function latticePaths(m, n) {
  let grid = Array(m + 1)
    .fill(0)
    .map(i => Array(n + 1).fill(0));
  for (let i = 0; i < m + 1; i++) {
    grid[i][0] = 1;
  }
  for (let j = 0; j < n + 1; j++) {
    grid[0][j] = 1;
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m][n];
}