/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumOfMultiples(multiples, ceiling) {
    return Array(ceiling)
        .fill()
        .map((_, i) => i)
        .filter(i => {
            for (let m of multiples) {
                if (i % m === 0) {
                    return true
                }
            }
            return false
        })
        .reduce((l, r) => l + r, 0)
}

console.log(sumOfMultiples([3, 5], 1000))
