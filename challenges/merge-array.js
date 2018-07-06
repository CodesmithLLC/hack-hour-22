/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
	let output = [];
	let i1 = 0;
	let i2 = 0;
  while (arr1.length > i1 || arr2.length > i2) {
  	if (arr1[i1] <= arr2[i2] || arr2.length === i2) {
  		output.push(arr1[i1])
  		i1++;
  	} else {
  		output.push(arr2[i2]);
  		i2++;
  	}
  }
  return output;
}

module.exports = mergeArrays;
