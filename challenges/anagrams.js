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
  if (string.length < 2) return string;
    let output = [];
    for (let i = 0; i < string.length; i ++) {
        let char = string[i];
        if (string.indexOf(char) != i)
            continue;
        let remainingLetters = string.slice(0, i) + string.slice(i + 1, string.length);
        for (let subSet of anagrams(remainingLetters))
            output.push(char + subSet)
    }
    return output;
}

module.exports = anagrams;

// Tests
// const result = anagrams('abc');
// console.log(result);  // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
