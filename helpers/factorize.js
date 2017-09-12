const intArray = require('./intArray')

function factorize(n) {
  const sqrt = Math.sqrt(n)
  const d = intArray(Math.floor(sqrt - 1, 2))
    .filter(i => n % i === 0)
    .reduce((l, r) => l.concat(r, n / r), [])
    .concat(Number.isInteger(sqrt) ? [sqrt] : [])
  d.sort((a, b) => parseInt(a) - parseInt(b))
  return d
}

module.exports = factorize
