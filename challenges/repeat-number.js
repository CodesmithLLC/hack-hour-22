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

function repeatNumbers(array) {
  const total = array.reduce((acc, num) => acc + num);
  const rangeTotal = array.length * (array.length - 1) / 2;
  return total - rangeTotal;
}

console.log(repeatNumbers([1, 2, 3, 3, 4]));

module.exports = repeatNumbers;
