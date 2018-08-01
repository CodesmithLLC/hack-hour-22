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
  if (string.length === 1) return [string];

  const combos = [];
  let checked = '';

  string.split('').forEach((char, idx) => {
    if (checked.indexOf(char) === -1) {
      const subCombos = anagrams(
        `${string.slice(0, idx)}${string.slice(idx + 1)}`,
        false
      );
      combos.push(...subCombos.map(str => `${char}${str}`));
      checked += char;
    }
  });

  return combos;
}

module.exports = anagrams;
