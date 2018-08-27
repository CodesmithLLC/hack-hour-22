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
  // return array.find((k,i) => array.indexOf(k) !== i);
  let repeatedNumber = 0;
  for (let i = 0; i < array.length; i+=1) {
    console.log(array.indexOf(array[i]));
    if (array.indexOf(array[i]) !== i) {
      repeatedNumber = array[i];
    }
  }
  return repeatedNumber;
}

function duplicateNumber(arr) {
  let countObj = {};
  for (let i = 0; i < arr.length; i += 1) {
    countObj[arr[i]] = (countObj[arr[i]] || 0) + 1;
    if (countObj[arr[i]] > 1) {
      return arr[i];
    }
  }
  return 0;
}

console.log(repeatNumbers([1,2,3,4,5,6,7,8,6]));
console.log(duplicateNumber([1,2,3,4,4,5,6,7,8]));
module.exports = repeatNumbers;
