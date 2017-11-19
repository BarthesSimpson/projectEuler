/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

const intArray = require('../helpers/intArray')

function longestReciprocalCycle(lim) {
  let max = 0
  let ans = lim
  let n = lim
  // we can do an early exit because the reciprocal cycle
  // for an integer cannot have a length greater than the integer
  while (n >= max) {
    console.log({ n, max })
    let cyc = reciprocalCycle(n)
    if (cyc > max) {
      max = cyc
      ans = n
    }
    n--
  }
  return ans
}

function reciprocalCycle(n) {
  let r = 1 % n
  const cycle = [r]
  r = (10 * r) % n
  while (!cycle.includes(r)) {
    cycle.push(r)
    r = (10 * r) % n
  }
  return cycle.length
}

console.log(longestReciprocalCycle(1000))
