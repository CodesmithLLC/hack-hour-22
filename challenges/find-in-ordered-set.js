/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let ls = 0;
  let rs = arr.length - 1;

  while(ls <= rs) {
    let mid = Math.floor((ls + rs) / 2);
    if (arr[mid] === target) return true;
    if (target > arr[mid]) {
      ls = mid + 1;
    } else {
      rs = mid + 1;
    }
  }
  return false;
}

module.exports = findInOrderedSet;
