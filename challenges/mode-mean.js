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

  function findMean(array) {
    if (array.length === 0) return 0;
    const newArray = [...array];
    const total = newArray.reduce((curr, acc) => curr += acc);
    const mean = Math.floor(total / newArray.length);
    return mean;
  }

  function findMode(array, mostUsed = 0) {
    if (array.length === 0) return 0;
    const newArray = [...array];
    const numbers = {};
    let mode;
    newArray.forEach((num) => {
      numbers[num] ? numbers[num] += 1 : numbers[num] = 1;
    })
    for (const key in numbers) {
      if (numbers[key] >= mostUsed) {
        mode = parseInt(key);
        mostUsed = numbers[key];
      }
    }
    return mode;
  }
  return findMean(array) === findMode(array);
}

console.log(modemean([]));
module.exports = modemean;
