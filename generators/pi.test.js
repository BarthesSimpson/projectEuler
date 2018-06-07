const piGen = require('./pi')

const pi_five = '3.14159'
const pi_seventeen = '3.14159265358979323'
const pi_twenty = '3.14159265358979323846'
// const pi_hundred =
//   '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'

describe('pi generator tests', () => {
  it('gets the first five digits correct', () => {
    expect(piGen(5)).toEqual(pi_five)
  })
  it('gets the first seventeen digits correct', () => {
    expect(piGen(17)).toEqual(pi_seventeen)
  })
  xit('gets the first twenty digits correct', () => {
    expect(piGen(20)).toEqual(pi_twenty)
  })
  xit('gets the first hundred digits correct', () => {
    expect(piGen(100)).toEqual(pi_hundred)
  })
})
