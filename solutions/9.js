/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// I don't know any smart tricks for this, except that Pythagorean triples
// have the property a < b < c so we can stagger the nested loop
// I thought about maybe using Fibonacci method to calculate a bunch of
// Pythagorean triples and then testing them to see if they meet the 
// requirement, but I couldn't remember how to implement that method.

const intArray = require('../helpers/intArray')

function pythagoreanTriplet(target) {
  for (let a = 1; a <= target; a++) {
    for (let b = a + 1; b <= target; b++) {
      let c = Math.sqrt(Math.pow(a, 2) + (Math.pow(b, 2)))
      if ((c % 1 === 0) && (a + b + c === 1000)) {
        return a * b * c
        break
      }
    }
  }
}

console.log(pythagoreanTriplet(1000))