// 13! calculates incorrectly. There is some weird edge case here...

const transpose = require('./transpose')

// m and n must each be an array of single digits
module.exports = (m, n) => {
  //decide which is the smaller matrix
  let arr1
  let arr2
  if (m.length > n.length) {
    arr1 = m
    arr2 = n
  } else {
    arr1 = n
    arr2 = m
  }
  //construct an empty matrix for our long multiplication
  const matrix = Array(arr2.length)
  for (let i = 0; i < arr2.length; i++) {
    matrix[i] = Array(arr1.length).fill(0)
  }
  //iterate through the smallest matrix,
  //performing each step of long multiplication
  for (let i = arr2.length - 1; i >= 0; i--) {
    for (let j = arr1.length - 1; j >= 0; j--) {
      let p = arr2[i] * arr1[j]
      //if the product is less than ten, just add it to the relevant cell
      if (p < 10) {
        matrix[arr2.length - 1 - i][j] += p
        //otherwise, we need to divide by 10 and carry
      } else {
        //if there is no room in the array, we need to make an extra cell
        let bump = false
        if (j === 0) {
          matrix[arr2.length - 1 - i] = [0].concat(matrix[arr2.length - 1 - i])
          bump = true
          j++
        }
        //then we perform the carry
        matrix[arr2.length - 1 - i][j] += p % 10
        matrix[arr2.length - 1 - i][j - 1] += Math.floor(p / 10)
        if (bump) j--
      }
    }
  }

  //add padding to line up the digits
  for (let i = 0; i < matrix.length; i++) {
    let padding = Array(matrix.length - 1 - i).fill(0)
    matrix[i] = padding.concat(matrix[i])
  }

  //place the columns in reverse order for summing
  //(and replace undefined values with zeros)
  const columns = transpose(matrix)
    .map(c => c.map(i => (i ? i : 0)))
    .reverse()
  //now, for the final step we compress the matrix
  //by summing each column (and carrying as required)
  const len = columns.length
  const solution = columns
    .reduce((l, r, i) => {
      let sum = l[i] + r.reduce((a, b) => a + b, 0)
      if (sum < 10) {
        l[i] = sum
      } else {
        if (i === len - 1) {
          l = l.concat([0])
          i++
        }
        l[i] = sum % 10
        l[i + 1] += Math.floor(sum / 10)
      }
      return l
    }, Array(len).fill(0))
    .reverse()
  console.log({ solution })
  return solution
}
