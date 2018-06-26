/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  array = array.filter(function (value) {
    return value <= target;
  });

  // pattern for combinations: do I want to include or exclude a val in subset?
  // yes? now look at the next thing > include or exclude (draw a tree)

  // base cases: if(target === 0) return true;
  // if (array.length === 0) return false;

  // recursive case: do we include the number we're looking at or not include it
  // include current elem  
  // return subsetSum(array.slice(1), target - array[0]) || 
  // exclude current elem
  // subsetSum(array.slice(1), target);

}

module.exports = subsetSum;

console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
/* looks similar to the recursive tree for fib.
        3
    3,7   3
3, 7, 4
*/
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6
