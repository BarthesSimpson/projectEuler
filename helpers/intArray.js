module.exports = (ceiling, floor = 0) => {
    return Array(ceiling - floor + 1).fill().map((_, i) => floor + i)
}
