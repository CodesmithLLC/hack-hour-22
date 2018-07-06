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
    let max = arr1.length > arr2.length ? arr1 : arr2;
    let min = arr1.length > arr2.length ? arr2 : arr1;
    if (arr1.length === arr2.length) {
      max = arr1.slice(-1) > arr2.slice(-1) ? arr1 : arr2;
      min = arr1.slice(-1) > arr2.slice(-1) ? arr2 : arr1;
      }
    while (min.length > 0){
      
      for(let i = 0; i < max.length; i++) {
        if (min[0]<max[i]){
          max.splice(i, 0, min[0]);
          min.shift();
          break;
          }
          
        }
    }  
    return max;  
  }

module.exports = mergeArrays;
