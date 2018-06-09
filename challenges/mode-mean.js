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
  
  const tallies = array.reduce((acc, num) => {
    if (!acc[num]) {
      acc[num] = 1;
    } else {
      acc[num]++;
    }
    total += num;
    return acc;
  }, {});

  const uniques = Object.keys(tallies);
  const counts = Object.values(tallies);
  const mode = uniques[counts.lastIndexOf((Math.max(...counts)))]

  return mode === Math.floor(total / n);
}

module.exports = modemean;
