/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  const sortedArr = array.sort((a, b) => a - b);
  return sortedArr.find((val, i) => (val !== array[i + 1]) && (val !== array[i - 1]));
}

module.exports = uniqueNumber;
