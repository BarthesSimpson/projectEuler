/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

// This is a weird problem. Presumably, there's some trick but let's
// just brute force it with a bit of DP for efficiency.

function longestCollatz(limit) {
  const chainLengths = { 1: 1 }
  for (let i = 2; i < limit; i++) {
    let num = i
    let count = 0
    let n = num
    while (!chainLengths.hasOwnProperty(n)) {
      count++
      if (n % 2 === 0) {
        n /= 2
      } else {
        n = 3 * n + 1
      }
    }
    chainLengths[num] = count + chainLengths[n]
  }
  return Object.keys(chainLengths).reduce(
    (l, r) => (chainLengths[r] > chainLengths[l] ? r : l)
  )
}

console.log(longestCollatz(1e6))
