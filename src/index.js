// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []

  return matrix.reduce((accumulator, curr, i) => {
      if (i % 2 == 0) {
        accumulator.push(...curr)
      } else {
        accumulator.push(...curr.reverse())
      }
      return accumulator
  }, [])
}
