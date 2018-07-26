/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

const repeatNumbers = (array) => {
  const arrayOfNum = [...array];
  let maxNum = Math.max(...arrayOfNum);
  let total = 0;
  while (maxNum > 0) {
    total += maxNum;
    maxNum -= 1;
  }
  return arrayOfNum.reduce((acc, val) => acc + val) - total;
};

module.exports = repeatNumbers;
