/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  const sorted = array.slice().sort((a, b) => {
    return a[0] - b[0]
  })
  sorted.forEach((range, index) => {
    for (let i = index; i < sorted.length; i++) {
      if (range[1] >= sorted[i][0] && i !== index) {
        if (range[1] <= sorted[i][1]) {
          range.pop()
          range.push(sorted[i].pop())
        }
        sorted.splice(i, 1)
      }
    }
  })
  if (sorted.length < array.length) return mergeRanges(sorted)
  else return sorted
}
module.exports = mergeRanges;