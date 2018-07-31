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
  if (!array.length) return [];
  array.sort((a, b) => a[0] - b[0]);
  const s = [array[0]];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i][0] >= s[index][0] && array[i][0] <= s[index][1]) {
      s[index][1] = Math.max(array[i][1], s[index][1]); // important!
    } else {
      s.push(array[i]);
      index++;
    }
  }
  return s;
}

module.exports = mergeRanges;
