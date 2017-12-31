/**
 * Calculate the sorted prime factors of an integer
 * @param {number} n
 * @returns {number[]}
 */

module.exports = n => {
  let r = n
  let ans = []
  while (r % 2 === 0) {
    ans.push(2)
    r /= 2
  }
  for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i += 2) {
    while (r % i === 0) {
      ans.push(i)
      r /= i
    }
  }
  if (r > 2) ans.push(r)
  return ans
}
