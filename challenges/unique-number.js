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
  let sum = array.reduce((acc, val) => acc + val, 0);
  let mySet = new Set(array);
  let setSum = mySet.map((k, x) => [k, x + 1]);
  return (3 * (setSum - sum)) / 2;
}

// Tests
uniqueNumber([1, 2, 1, 3, 3]);
module.exports = uniqueNumber;
