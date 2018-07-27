/* eslint prefer-destructuring: 0 */
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

function inside(num, array) {
  return (num >= array[0] && num <= array[1]);
}

function around(oldBound, newBound) {
  return (newBound[0] <= oldBound[0] && newBound[1] >= oldBound[1]);
}

function mergeRanges(array) {
  let merged = array.slice(0, 1);
  for (let i = 1; i < array.length; i += 1) {
    let madeMerge = false;
    for (let j = 0; j < merged.length; j += 1) {
      if (around(merged[j], array[i])) {
        merged[j] = array[i];
        merged = mergeRanges(merged);
        madeMerge = true;
        break;
      }
      if (inside(array[i][0], merged[j])) {
        merged[j][1] = Math.max(merged[j][1], array[i][1]);
        merged = mergeRanges(merged);
        madeMerge = true;
        break;
      }
      if (inside(array[i][1], merged[j])) {
        merged[j][0] = Math.min(merged[j][0], array[i][0]);
        merged = mergeRanges(merged);
        madeMerge = true;
        break;
      }
    }
    if (!madeMerge) merged.push(array[i]);
  }
  return merged;
}

module.exports = mergeRanges;
