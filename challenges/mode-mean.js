/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
  if (array.length === 0) return true;

  const startCase = {
    mean: 0,
    mode: array[0],
    count: {},
  };

  const processed = array.reduce((res, val, _, { length }) => {
    // update mean
    const newMean = res.mean + (val / length);

    // update count
    const newCount = res.count;
    newCount[val] = newCount[val] ? newCount[val] + 1 : 1;

    // check for new mode
    let newMode = res.mode;
    if (newCount[val] > newCount[newMode]) {
      newMode = val;
    } else if (newCount[val] === newCount[newMode] && val > newMode) {
      newMode = val;
    }

    return { mean: newMean, mode: newMode, count: newCount };
  }, startCase);

  const { mean, mode } = processed;
  return Math.floor(mean) === mode;
}

module.exports = modemean;

