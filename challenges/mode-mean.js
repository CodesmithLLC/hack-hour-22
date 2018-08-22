/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
  const mean = Math.floor(array.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0) / 2);

  const frequency = {};
  let maxCount = 0;
  let mode;

  for (const i in array) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1;
    if (frequency[array[i]] > maxCount) {
      maxCount = frequency[array[i]];
      mode = array[i];
    }
  }

  return mean === mode;
}

module.exports = modemean;
