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
  for (let index = 0; index < arrayOfNum.length - 1; index += 1) {
    let jdex = index;
    if (arrayOfNum[index] === arrayOfNum[index + 1]) {
      return arrayOfNum[index];
    }
    for (jdex; index > jdex; jdex -= 1) {
      let swapped = false;
      if (arrayOfNum[jdex] < arrayOfNum[jdex - 1]) {
        const temp = arrayOfNum[jdex];
        arrayOfNum[jdex] = arrayOfNum[jdex - 1];
        arrayOfNum[jdex - 1] = temp;
        swapped = true;
      }
      if (!swapped) break;
    }
  }
  // let maxNum = Math.max(...arrayOfNum);
  // let total = 0;
  // while (maxNum > 0) {
  //   total += maxNum;
  //   maxNum -= 1;
  // }
  // return arrayOfNum.reduce((acc, val) => acc + val) - total;
  return null;
};

module.exports = repeatNumbers;
