const intArray = require('./intArray')

function factorize(n) {
  const sqrt = Math.sqrt(n)
  const d = intArray(Math.floor(sqrt))
    .filter(i => n % i === 0)
    .reduce((l, r) => (r === sqrt ? l.concat(r) : l.concat(r, n / r)), [])
  d.sort((a, b) => parseInt(a) - parseInt(b))
  return d
}

module.exports = factorize
