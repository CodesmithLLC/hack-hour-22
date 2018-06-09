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

  let total = 0;
  const n = array.length;
  const tallies = array.sort().reduce((acc, num) => {
    !acc[num] ? acc[num] =  1 : acc[num] += 1;
    total += num;
    return acc;
  }, {});

  const uniques = Object.keys(tallies);
  const counts = Object.values(tallies);
  const mode = uniques[counts.lastIndexOf((Math.max(...counts)))]

  return +mode === Math.floor(total / n);
}

module.exports = modemean;


