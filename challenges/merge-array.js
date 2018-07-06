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

  const longArray = arr1.length > arr2.length ? arr1 : arr2;
  const shortArray = arr1.length > arr2.length ? arr2 : arr1;

  const merged = [];

  while (longArray.length > 0) {
    if (longArray[0] <= shortArray[0] || shortArray.length === 0) {
      merged.push(longArray[0]);
      longArray.shift();
    } else {
      merged.push(shortArray[0]);
      shortArray.shift();
    }
  }
  return merged;
}

var my_array = [3, 4, 6, 10, 11, 15, 21];
var another_array = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
