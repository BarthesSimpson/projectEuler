module.exports = n => {
  if (typeof n === 'number') {
    n = Array.from(n.toString())
  }
  return n.reduce((l, r) => l + parseInt(r), 0)
}
