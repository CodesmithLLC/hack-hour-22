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
	let occurs = {};
	let mode;
	let mean = Math.floor((array.reduce((acc, val) => {return acc + val})) / array.length)
	array.forEach(num => {
		if (occurs[num]) {
			occurs[num] += 1;
		} else {
			occurs[num] = 1;
		}
	})
	for(let key in occurs) {
		if (occurs[key] >= occurs[mode] || mode === undefined) {
			mode = key
		}
	}
	console.log(mean);
	console.log(mode);
	return mode == mean; 
}

module.exports = modemean;

console.log(modemean(arr))