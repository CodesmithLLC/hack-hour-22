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
  const size = array.length;

}

/*
**Brute Force Method**
1. find the sum of every subset of array 
2. that means that in an array of length n, there will be 2^n subsets, including the empty set. 
3. I need to find the sum of all subsets of length 1, length 2, length 3....length n (only one of those);
4. 
*/



module.exports = subsetSum;
