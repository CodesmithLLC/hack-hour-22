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
  let result = array.reduce((acc, elem) => {
    acc.total += elem;
    acc[elem] = (acc[elem] += 1) || 1;
    if (acc.mostFreq < acc[elem]) {
      acc.prevFreq = acc.mostFreq;
      acc.mostFreq = elem;
    }
    return acc;
  }, {prevFreq: 0, mostFreq: 0, total: 0});

  return Math.floor(result.total/array.length) === Math.max(result.prevFreq, result.mostFreq);
}

module.exports = modemean;
