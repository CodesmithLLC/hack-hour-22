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

  const newArr = array.sort((a, b) => a - b);

  return newArr.reduce( (acc, curr, i) => {
    if (curr !== array[i+1] && curr !== array[i - 1]) return curr;
    return acc;
  }, null)

}

console.log(uniqueNumber([1, 2, 1, 3, 3]))
module.exports = uniqueNumber;
