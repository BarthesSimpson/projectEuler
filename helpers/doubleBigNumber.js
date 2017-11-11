// n must be an array of single digits
module.exports = n => {
  // don't mutate input array!
  let arr = [...n].reverse()
  let i = 0
  let carry = false
  while (i < arr.length - 1) {
    let d = arr[i] * 2
    if (carry) d++
    if (d < 10) {
      arr[i] = d
      carry = false
    } else {
      carry = true
      arr[i] = d - 10
      if (arr.length < i + 1) {
        arr.push(0)
      }
    }
    i++
  }
  const last = arr.length - 1
  let d = arr[last] * 2
  if (carry) {
    d++
  }
  if (d < 10) {
    arr[last] = d
  } else {
    arr[last] = d - 10
    arr.push(1)
  }
  return arr.reverse()
}
