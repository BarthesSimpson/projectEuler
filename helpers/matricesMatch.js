const arraysMatch = require('./arraysMatch')
module.exports = (a, b) => {
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i++) {
    if (!arraysMatch(a[i], b[i])) {
      return false
    }
  }
  return true
}