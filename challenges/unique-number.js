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
  
  let holderObj = {};

  for (let x = 0; x < array.length; x++){
    // put element in an object
    // if element is in the object, increment it's key value
    // at the end, look for the key that has a value of 1

    if (!holderObj[array[x]]) {
      holderObj[array[x]] = 1
    } else {
      holderObj[array[x]] += 1
    }
  }
  // console.log(holderObj);

  let num = Object.keys(holderObj);

  for (let x = 0; x < num.length; x++ ){
    // console.log(num, num[x], holderObj[num[x]])
    if (holderObj[num[x]] === 1){
      return num[x]
    }
  
  }

  return null;
}

// console.log(uniqueNumber([1,2,1,3,3]));
module.exports = uniqueNumber;
