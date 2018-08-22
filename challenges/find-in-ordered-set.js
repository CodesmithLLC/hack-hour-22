/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  // define midpoint
  let mid = Math.floor((front + back) / 2);

  // define base cases
  if (target === arr[mid]) return true;
  if (front === back) return false;

  // recurse and adjust midpoint
  if (target < arr[mid])
    return findInOrderedSet(arr, target, front, (back = mid));
  if (target > arr[mid])
    return findInOrderedSet(arr, target, (front = mid + 1), back);
}

// TESTS
// console.log(findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 4));

module.exports = findInOrderedSet;
