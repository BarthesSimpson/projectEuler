const nthFibonacci = require('./nthFibonacci')
function naiveFib(n) {
  let i = 2
  let num = 2
  let cache = 1
  let tmp
  while (i < n + 1) {
    tmp = num
    num += cache
    cache = tmp
    i++
  }
  return num
}
it('correctly identifies the nth Fibonacci number', () => {
  expect(naiveFib(10)).toEqual(nthFibonacci(10))
})