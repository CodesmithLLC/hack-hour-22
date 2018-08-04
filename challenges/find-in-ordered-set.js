/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // using bisection search 
  let lowerIndex = 0;
  let upperIndex = arr.length - 1;
  let medianIndex = Math.floor(arr.length / 2);

  while (medianIndex !== lowerIndex && medianIndex !== upperIndex) {
    if (target === arr[medianIndex] || target === arr[lowerIndex] || target === arr[upperIndex]) {
      return true;
    } else if (target < arr[medianIndex]) {
      upperIndex = medianIndex
      medianIndex = Math.floor((upperIndex + lowerIndex) / 2); 
    } else if (target > arr[medianIndex]) {
      lowerIndex = medianIndex
      medianIndex = Math.floor((upperIndex + lowerIndex) / 2); 
    }
  }
  return false;
}


module.exports = findInOrderedSet;
