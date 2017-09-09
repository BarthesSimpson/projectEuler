/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// I don't know any smart tricks for this, except that Pythagorean triples
// have the property a < b < c so we can stagger the nested loops
// I thought about maybe using Fibonacci method to calculate a bunch of
// Pythagorean triples and then testing them to see if they meet the 
// requirement, but I couldn't remember how to implement that method.

const intArray = require('../helpers/intArray')

function pythagoreanTriplet(target) {
  const ceil = target // <-- This ceiling could probably be lower, but I don't know how much lower
  const squares = intArray(ceil, 1).map(i => i ** 2)
  for (let i = 0; i < squares.length - 2; i++) {
    const a = squares[i]
    for (let j = i + 1; j < squares.length - 1; j++) {
      const b = squares[j]
      for (let k = j + 1; k < squares.length; k++) {
        const c = squares[k]
        const sum = i + j + k + 3
        if ((a + b === c) && sum === target) {
          return (i+1) * (j+1) * (k+1)
        }
        if (sum > target) {
          break
        }
      }
    }
  }
}

console.log(pythagoreanTriplet(1000))