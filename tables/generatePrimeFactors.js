const primeFactorize = require('../helpers/primeFactorize')

// console.log('-----------------------------')
// console.log('-----------------------------')
// for (let i = 3; i < 1000; i++) {
//   console.log(primeFactorize(i))
//   if (i % 12 === 0) {
//     console.log('\n','-----------------------------','\n')
//   }
// }

for (let i = 3; i < 1000; i++) {
  console.log(JSON.stringify({id: i, arr: primeFactorize(i)}) + ',')
}


// function primeFactorHistogram(n) {
//   let r = n
//   let ans = Array(n - 1)
//     .fill()
//     .reduce((map, _, i) => ({ ...map, [i + 2]: 0 }), {})
//   console.log({ ans })
//   while (r % 2 === 0) {
//     ans[2] += 1
//     r /= 2
//   }
//   for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i += 2) {
//     while (r % i === 0) {
//       ans[i] += 1
//       r /= i
//     }
//   }
//   if (r > 2) ans[r] += 1
//   return ans
// }

// for (let i = 3; i < 4; i++) {
//   console.log(primeFactorHistogram(i))
//   if (i % 12 === 0) {
//     console.log('\n', '-----------------------------', '\n')
//   }
// }
