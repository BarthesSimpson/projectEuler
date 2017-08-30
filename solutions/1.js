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
