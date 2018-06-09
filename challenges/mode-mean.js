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
	let modes = [];
	let maxFrequency = 0;

  const mean = array.reduce((accum, num) => {
    return accum + num;
  }, 0) / array.length;

  const numbersFrequency = array.reduce((accum, num) => {
		if(accum.hasOwnProperty(num)) {
			accum[num]++
			return accum;
		} else {
			accum[num] = 0;
			accum[num]++;	
			return accum;
		}
	}, {});

	const values = Object.values(numbersFrequency);

	for(let i = 0; i < values.length; i++) {
		if(values[i] > maxFrequency) maxFrequency = values[i];
	}

	for(let prop in numbersFrequency) {
		if(numbersFrequency[prop] === maxFrequency) {
			modes.push(prop);
		}
	}

	const maxMode = Math.max(...modes);
	
	if(maxMode === mean) return true;
	return false;
}

const array = [1, 2, 3, 4, 5, 6];
console.log(modemean(array));


module.exports = modemean;
