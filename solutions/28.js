/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

// I figured out this formula by looking at the picture:
/*
* - Where l is the "layer" of the square (the center is the zero-th layer)
* - going Northeast from center, the diagonal is (l * 2 + 1) ** 2
* - going Northwest from center, the diagonal is (l * 2 + 1) ** 2 - (2 * l)
* - going Southwest from center, the diagonal is (l * 2) ** 2 + 1
* - going Southeast from center, the diagonal is (l * 2) ** 2 + 1 - (2 * l)
* The number of layers is (n - 1) / 2
* The center is always counted once
* So, cancelling everything out, the sum of diagonals is:
* SIGMA(4 * (4 * l ** 2 + 3 * l + 1)) over all layers > 0, plus 1 for the zero-th layer
*/
/**
 * Calculate the sum of the diagonals for a spiral square of n x n shape
 * @param {number} n - the length of the side of the spiral square
 * @returns {number}
 */
function spiralSum(n) {
  const L = (n - 1) / 2
  let sum = 0
  for (let l = 1; l <= L; l++) {
    sum += 4 * (4 * l ** 2 + l + 1)
  }
  return ++sum
}

// console.log(spiralSum(5))
console.log(spiralSum(1001))
