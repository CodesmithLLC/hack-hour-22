/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let i = 0, j = arr.length - 1;
  while (true) {
    // does crashing left cause an improvement (i.e. leftTotal to be negative)?
    let I = i, leftTotal = 0;
    while (I <= j && leftTotal >= 0) {
      leftTotal += arr[I];
      I++;
    }
    
    if (leftTotal < 0) {
      i = I;
      continue;
    }
    
    // does crashing right cause an improvement?
    let J = j, rightTotal = 0;
    while (i <= J && rightTotal >= 0) {
      rightTotal += arr[J];
      J--;
    }
    
    if (rightTotal < 0) {
      j = J;
      continue;
    }
    
    // no improvements from crashing
    return arr.slice(i, j + 1).reduce((acc, n) => acc + n);
  }
  
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([15,20,-5,10]));

module.exports = maxSubarray;
