/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  // true
findInOrderedSet(nums, 2);  // false

 */


function findInOrderedSet(arr, target) {
  let i = 0, j = arr.length;
  
  while (i < j) {
    const m = i + Math.floor((j - i) / 2);
    
    if (target === arr[m])
      return true;
    else if (target < arr[m])
      j = m;
    else
      i = m + 1;
  }
  
  return arr[i] === target;
}


var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4));  // true
console.log(findInOrderedSet(nums, 6));  // true
console.log(findInOrderedSet(nums, 2));  // false
nums = [1, 4, 6, 7, 9, 17, 45, 46]
console.log(findInOrderedSet(nums, 4));  // true
console.log(findInOrderedSet(nums, 6));  // true
console.log(findInOrderedSet(nums, 2));  // false


module.exports = findInOrderedSet;
