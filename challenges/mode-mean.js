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
    const sums = array.reduce((a, b) => {
        return a + b;
        });
    const mean = Math.floor(sums / array.length);
    const frequencies = {};
    let mode;
    array.forEach(el => !frequencies[el] ? frequencies[el] = 1 : frequencies[el]++);
    let frequentNum = Math.max(...Object.values(frequencies));
    for (let key in frequencies) {
        if (frequencies[key] === frequentNum) {
        mode = key;
        }
    }
    return mean == mode;
}

module.exports = modemean;
