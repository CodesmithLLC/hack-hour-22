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
const merge = (arr1, arr2) => {
  return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
}

function mergeRanges(array) {
  const merged = [array[0]];
  for (let i = 1; i < array.length; i += 1) {
    const currRange = array[i];
    for (let index = i - 1; index >= 0; index -= 1) {
      const testingRange = array[index];
      if ((currRange[0] >= testingRange[0]) && (currRange[0] <= testingRange[1])) {
        merged.push(merge(currRange, testingRange));
        break;
      }
    }
  }
}

module.exports = mergeRanges;
