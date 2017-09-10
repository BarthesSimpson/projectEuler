module.exports = v => {
  const partials = v.slice(0, 1)
  v.slice(1, v.length).forEach((n, i) => {
    partials.push(n + partials[i])
  })
  return partials
}