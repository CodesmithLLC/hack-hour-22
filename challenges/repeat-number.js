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
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) return array[i];
    obj[array[i]] = array[i];
  }
}

console.log(repeatNumbers([1,2,3,4,5,2]))
module.exports = repeatNumbers;
