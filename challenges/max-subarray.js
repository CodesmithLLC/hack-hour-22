/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function add(a, b) {
  return a + b;
}

function maxSubarray(arr) {
  if (arr.length === 1) return arr[0];
  return Math.max(
    arr.reduce(add),
    maxSubarray(arr.slice(1)),
    maxSubarray(arr.slice(0, -1))
  );
}

module.exports = maxSubarray;
