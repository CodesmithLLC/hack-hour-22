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

// O(n) time
function repeatNumbers(array) {
  const found = {};
  for (let i = 0; i < array.length; i += 1) {
    const number = array[i];
    if (found[number]) {
      return number;
    }
    found[number] = true;
  }
  return undefined;
}

module.exports = repeatNumbers;
