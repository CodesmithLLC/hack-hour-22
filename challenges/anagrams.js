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

 function anagrams(str) {
  // store the anagrams 
  const grams = [];

  // define a base case, if empty str return empty str in array
  if (!str.length) return ['']

  // iterate the chars, splice the char, recurse on remainder, and concat
  str.split('').forEach((char, i) => {
    // create two slices, one from 0 to index concat to the rest
    const rest = str.slice(0, i) + str.slice(i + 1);

    // recurse on the remainder and store
    const subGrams = anagrams(rest);
    
    // for each sub-anagram, concat the current, push that to the anagrams
    subGrams.forEach(subGram => grams.push(subGram + char))
  })

  // remove duplicates
  return [...new Set(grams)]
}

module.exports = anagrams;
