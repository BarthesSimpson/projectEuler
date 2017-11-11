/**
 * Subtract an arbitrarily large integer from another via 
 * array representation
 * @param {number[]} m The larger of the two integers.
 * @param {number[]} n The smaller of the two integers.
 * @returns {number[]}
 */

module.exports = (m, n) => {
  if (!gateCheck(m, n)) {
    throw new Error('Cannot subtract larger array from smaller')
  }
  //pad the shorter array
  const padding = Array(m.length - n.length).fill(0)
  const arr1 = [...m]
  const arr2 = padding.concat(n)
  //iterate through the arrays backwards, performing subtraction
  //at each index (and carrying over where necessary)
  let i = 1
  while (i <= arr2.length) {
    const idx = arr2.length - i
    const int1 = arr1[idx]
    const int2 = arr2[idx]
    if (int1 >= int2) {
      arr1[idx] = int1 - int2
    } else {
      arr1[idx] = int1 + 10 - int2
      arr2[idx - 1] += 1
    }
    i++
  }
  //trim any leading zeros
  let j = 0
  while (arr1[j] === 0) {
    j++
  }
  return arr1.slice(j)
}

// check to make sure that a smaller array is being subtracted
// from a larger one
function gateCheck(arr1, arr2) {
  const l1 = arr1.length
  const l2 = arr2.length
  if (l2 > l1) {
    return false
  }
  if (l2 === l1) {
    for (let i = 0; i < l2; i++) {
      if (arr1[i] > arr2[i]) {
        return true
      }
      if (arr2[i] > arr1[i]) {
        return false
      }
    }
  }
  return true
}
