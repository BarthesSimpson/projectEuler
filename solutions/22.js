/*
Using inputs/names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
What is the total of all the name scores in the file?
*/

function namesScores(names) {
  //clone the array just to be cool
  const sorted = [...names]
  sorted.sort()
  return sorted
    .map((name, index) => alphaScore(name) * (index + 1))
    .reduce((l, r) => l + r, 0)
}

function alphaScore(str) {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  return Array.from(str)
    .map(c => alphabet.indexOf(c) + 1)
    .reduce((l, r) => l + r, 0)
}

const names = require('../inputs/names')
console.log(namesScores(names))
