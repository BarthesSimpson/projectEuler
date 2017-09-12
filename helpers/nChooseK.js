// Uses Pascal's Triangle to expand binomial series, 
// from which nChooseK is just binomials[n][k]
const binomials = require('../tables/binomials')

function nChooseK(n, k) {
  let bin = binomials
  while (n >= bin.length) {
    let s = bin.length;
    nextRow = [];
    nextRow[0] = 1;
    for (let i = 1, prev = s - 1; i < s; i++) {
      nextRow[i] = bin[prev][i - 1] + bin[prev][i];
    }
    nextRow[s] = 1;
    bin.push(nextRow);
  }
  return bin[n][k];
}

module.exports = nChooseK
