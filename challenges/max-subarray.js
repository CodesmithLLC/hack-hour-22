/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let maxNum = -Number.MAX_VALUE;
  let sum = 0;

  arr.forEach((item, index, array) => {
    sum += item;
    if (sum > maxNum) maxNum = sum;
    if (sum < 0) sum = 0;
  });
  return maxNum;
};

module.exports = maxSubarray;

// Tests
// console.log("18: " + maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
// console.log("40: " + maxSubarray([15,20,-5,10]));
