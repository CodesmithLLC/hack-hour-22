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
  const merged = [];
  // loop over the array
  for (let i = 0; i < array.length; i++) {
    const nums = [];
    // find the range if numbers in the array from [0] to [1]
    for (let j = array[i][0]; j < array[i][1]; j++) {
      nums.push(array[i][j]);
      // if neighboring array has overlapping ranges, condense into one array with min and max
      if (nums.includes(Math.max(...array[i + 1])) || nums.includes(Math.min(...array[i + 1]))) {
        const newArr = [];
        const concated = array[i].concat(array[i + 1]);
        newArr.push(Math.min(...concated));
        newArr.push(Math.max(...concated));
        merged.push(newArr);
      } else {
        // if neightboring does not overlap, return array
        merged.push(array[i]);
      }
    }
  }
  return merged;
}

module.exports = mergeRanges;
