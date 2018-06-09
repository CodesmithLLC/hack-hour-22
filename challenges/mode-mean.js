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


// function modemean(array) {
//   if (array.length === 0) return true;
//   const counts = {};
//   let currentMode = [array[0], 1];

//   const mean = array.reduce((res, val) => {
//     counts[val] = counts[val] ? counts[val] + 1 : 1;

//     // counting side effect
//     if (counts[val] > currentMode[1]) {
//       currentMode = [val, counts[val]];
//     } else if (counts[val] === currentMode[1] && val > currentMode[0]) {
//       currentMode = [val, counts[val]];
//     }
//     // end side effect

//     return res + val;
//   }, 0) / array.length;
//   const [mode] = currentMode;

//   return Math.floor(mean) === mode;
// }

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

