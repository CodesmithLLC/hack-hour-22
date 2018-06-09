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
  if (!array.length) {
    return true;
  }
  let highest = [0, 0];
  let mean = array.reduce((acc, num) => acc + num) / array.length;
  let count = array.reduce((acc, x) => {
    if (acc[x]) acc[x] = acc[x] += 1;
    if (!acc[x]) acc[x] = 1;
    return acc;
  }, {});
  for (const key in count) {
    if (count[key] > highest[1] || (count[key] === highest[1] && +key > highest[0])) {
      highest = [+key, count[key]];
    }
  }
  return mean === highest[0];
}

console.log(modemean([3, 4, 5, 5, 8]))
module.exports = modemean;
