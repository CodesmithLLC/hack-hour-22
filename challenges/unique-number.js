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
  let result = 0;
  
  for (const num of array)
    result = result ^ num;
  
  return result;
}

// console.log(uniqueNumber([11,2222,11,333,333]));

module.exports = uniqueNumber;
