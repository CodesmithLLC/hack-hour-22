/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  const output = false;
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
    if (arr[i] === target) return true;
  }
  return output;
}
console.log(findInOrderedSet([1, 4, 5, 6, 7, 8], 5));


function findInOrderedSet2(arr, target) {

  const mid = arr.length / 2;
  if (arr[mid] > target) {
    
  }

  function inner(start, end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) return true;
    if (end === start) return false;
    if (arr[middle] > target) {
      return inner(start, middle - 1);
    }
    else {
      return inner(middle + 1, end);
    }
  }
  return inner(0, arr.length - 1);
}

console.log(findInOrderedSet2([1, 4, 5, 6], 12));


module.exports = findInOrderedSet;
