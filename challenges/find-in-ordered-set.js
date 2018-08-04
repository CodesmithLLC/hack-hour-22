/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let center = arr.length;
  let change = center;
  while (change !== 1) {
    change = Math.ceil(change / 2);
    center += arr[center] < target ? change : -change;
    if (arr[center] === target) return true;
  }
  return false;
}


module.exports = findInOrderedSet;
