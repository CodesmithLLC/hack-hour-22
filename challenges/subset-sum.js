/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function memoize(func) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
		if (!cache.hasOwnProperty(key))
			cache[key] = func(...args);
    
    return cache[key];
  }
}

function testSum(array, index, target) {
  // we've gone through the entire array of numbers.
  // return if the target has been driven down to 0
  if (index === -1) return target === 0;
  // we've already reached the target sum :)
  if (target === 0) return true;
  
  // either we don't use the current number, or we do use the current number.
  return testSumMem(array, index - 1, target) || testSumMem(array, index - 1, target - array[index]);
}

const testSumMem = memoize(testSum);


function subsetSum(array, target) {
  return testSum(array, array.length - 1, target)
}

// 
// console.log(subsetSum([3, 7, 4, 2], 5)); //- > true, 3 + 2 = 5
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); //-> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)); //-> false
// console.log(subsetSum([8, -2, 1, -3], 6)); //-> true, 8 + 1 + (-3) = 6


module.exports = subsetSum;
