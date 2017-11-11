const transpose = require('./transpose')

// m and n must each be an array of single digits
module.exports = (m, n) => {
  //decide which is the smaller array
  let arr1
  let arr2
  //don't mutate the input arrays!
  if (m.length > n.length) {
    arr1 = [...m]
    arr2 = [...n]
  } else {
    arr1 = [...n]
    arr2 = [...m]
  }
  //pad the shorter array
  const padding = Array(arr1.length - arr2.length).fill(0)
  arr2 = padding.concat(arr2)
  //iterate through the arrays backwards, performing addition
  //at each index (and carrying over where necessary)
  let i = 1
  while (i <= arr2.length) {
    const idx = arr2.length - i
    const int1 = arr1[idx]
    const int2 = arr2[idx]
    const sum = int1 + int2
    //if the sum is less than 10, we just update arr1
    if (sum < 10) {
      arr1[idx] = sum
      //if the sum is greater than 10, we must carry the 1
    } else {
      arr1[idx] = sum - 10
      //as long as we are not at the final digit, carrying is easy
      if (idx > 0) {
        arr2[idx - 1] += 1
        //if we are at the final digit, we have to make space for the carry
      } else {
        arr2 = [1].concat(arr2)
        arr1 = [0].concat(arr1)
      }
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
