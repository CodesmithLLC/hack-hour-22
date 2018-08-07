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
  const cache = {};
  for(let i = 0; i < array.length; i++) {
    if(cache.hasOwnProperty(array[i])) {
      cache[array[i]] += 1;
    } else {
      cache[array[i]] = 0;
      cache[array[i]] += 1;      
    }
  }
  for(let prop in cache) {
    if(cache[prop] === 1) return prop;
  }
}

uniqueNumber([1,2,1,3,3]);

module.exports = uniqueNumber;
