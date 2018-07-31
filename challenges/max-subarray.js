/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // create max placeholder
  let max = -Infinity;
  // loop over array and let sum equal 0
  for(let i = 0; i < arr.length; i++) {
    sum = 0;
    // loop back over array where j = i
    for (let j = i; j < arr.length; j++) {
      // add each element in arr on second pass
      sum += arr[j];
      // if sum is greater than max then max equals sum
      if (sum > max) max = sum;
    }
  }
  return max;
}

module.exports = maxSubarray;
