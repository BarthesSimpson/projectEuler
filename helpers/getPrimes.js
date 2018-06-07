/* Uses the seive of Eratosthenes to get all primes between any two integers > 1
(ceil is exclusive, floor is inclusive) */
module.exports = (ceil, floor = 2) => {
  const arr = Array(ceil).fill(true)
  for (let i = 2; i <= Math.sqrt(ceil); i++) {
    let j = i ** 2
    while (j <= ceil) {
      arr[j] = false
      j += i
    }
  }
  return arr
    .map((_, i) => (_ ? i : _))
    .filter(i => i)
    .slice(floor - 1)
}
