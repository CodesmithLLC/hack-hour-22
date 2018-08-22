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
  const { length } = arr1;
  const index2 = arr2.lengtth - 1;
  let currIndex2 = 0;
  const newArr = [];
  for (let i = 0; i < length; i += 1) {
    if (arr2[currIndex2] === undefined) {
      newArr.push(...arr1.slice(i));
      break;
    }
    if ((i === (length - 1)) && (currIndex2 < index2)) {
      newArr.push(arr1[i], ...arr2.slice(currIndex2));
      break;
    }
    if (arr1[i] > arr2[currIndex2]) {
      while (arr1[i] > arr2[currIndex2]) {
        newArr.push(arr2[currIndex2]);
        currIndex2 += 1;
      }
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

module.exports = mergeArrays;
