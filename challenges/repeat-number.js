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
  array.sort();
  for (e in array) {
    if (e > 0) {
      if (array[e] === array[e - 1]) return array[e];
    }
  }
  return 0;
}

module.exports = repeatNumbers;

// Tests
// const arr = [1, 4, 2, 6, 7, 12, 4, 18];
// console.log(repeatNumbers(arr));
