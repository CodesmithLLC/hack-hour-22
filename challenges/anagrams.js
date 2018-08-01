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
  const answers = [];
  if (string.length < 2) return [string];
  for (let i = 0; i < string.length; i += 1) {
    const letter = string[i];
    const word = string.substr(0, i) + string.substr(i + 1, string.length - 1);
    const words = anagrams(word);
    for (let j = 0; j < words.length; j += 1) {
      answers.push(letter + words);
    }
  }
  return answers;
}

module.exports = anagrams;
