module.exports = n => {
  return Array.from(n.toString()).reduce((l,r) => l + parseInt(r), 0)
}