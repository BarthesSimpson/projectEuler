const numberLength = require('./numberLength')
// See http://mathworld.wolfram.com/NumberLength.html
module.exports = n => { 
  return (Math.log(Math.abs(n)+1) * 0.43429448190325176 | 0) + 1; 
}