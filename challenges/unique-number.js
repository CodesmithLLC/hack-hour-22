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
  // define min and max
  // summation formula
  // subtract out the actual sum from the summation

  const min = Math.min(...array);
  const max = Math.max(...array);
  var summation = 0;
  
  for (let i = min; i <= max; i++) {
    summation += i;
  }
  
  const actualSum = array.reduce((a, b) => a + b);
  return summation * 2 - actualSum;
}

console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
