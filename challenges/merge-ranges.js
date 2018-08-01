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
  array.sort((a, b) => a[0] - b[0]);
  const output = [array[0]];
  for (let i = 0; i < array.length; i += 1) {
    let curr = array[i];
    let last = output[output.length - 1];
    if (curr[0] > last[1]) {
      output.push(curr);
    }
    else if (curr[1] > last[1]) {
      last[1] = curr[1];
    }
  }
  return output;
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges([[1, 4], [2, 3]]))
console.log(mergeRanges(times));

module.exports = mergeRanges;
