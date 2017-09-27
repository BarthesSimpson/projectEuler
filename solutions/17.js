/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const digits = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]
const teens = [
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
]
const tens = [
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]
const letters = [-1]
  .concat(digits)
  .concat(['ten'])
  .concat(teens)
  .concat(Array(980).fill(-1))
let num = 20
while (num < 100) {
  const ten = tens[Math.floor(num / 10) - 1]
  const dig_i = num % 10
  const digit = dig_i > 0 ? digits[dig_i - 1] : ''
  letters[num] = ten + digit
  num++
}
console.assert(letters[99].length === 'ninetynine'.length)
console.assert(letters[88].length === 'eightyeight'.length)
while (num < 1000) {
  const hund_i = Math.floor(num / 100)
  const hundred = digits[hund_i - 1] + 'hundred'
  const rest = num % 100 > 0 ? 'and' + letters[num - 100 * hund_i] : ''
  letters[num] = hundred + rest
  num++
}
console.assert(letters[108].length === 'onehundredandeight'.length)
console.assert(letters[180].length === 'onehundredandeighty'.length)
console.assert(letters[999].length === 'ninehundredandninetynine'.length)
const output = letters
  .slice(1)
  .concat('onethousand')
  .reduce((l, r) => l + r.length, 0)
console.log(output)
