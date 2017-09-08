// Uses "fast doubling" method

function nthFibonacci(n) {
  return nthFibonacciRecursive(n).reduce((l, r) => l + r)
}

function nthFibonacciRecursive(n) {
  if (n === 0) {
    return [0, 1]
  }
  let [a, b] = nthFibonacciRecursive(Math.floor(n / 2))
  c = a * (b * 2 - a)
  d = a * a + b * b
  return n % 2 === 0
    ? [c, d]
    : [d, c + d]

}

module.exports = nthFibonacci
