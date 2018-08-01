/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  // accumulate character object
  const chars = {};
  for (const char of string) {
    if (!chars[char]) chars[char] = 1;
    else chars[char]++;
  }
  
  const results = [];
  // recursively accumulate item, then dump into result as a base case
  function generateItems(item = '') {
    // if item is full, push it onto results and exit
    if (item.length === string.length) {
      results.push(item);
      return ;
    }
    
    // otherwise, attempt (depth-first) further item generation
    for (const char in chars) {
      // if chars[char] is nonzero, decrement and recursively generate item
      if (chars[char]) {
        chars[char]--;
        generateItems(item + char);
        chars[char]++;
      }
    }
  }
  
  generateItems();
  return results;
}

// console.log(anagrams('abc'));
// console.log(anagrams('aabc'));

module.exports = anagrams;
