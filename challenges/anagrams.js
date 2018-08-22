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
  if (!string || string.trim() === '') return [''];
  if (string.length === 1) return [string];
  const strArr = string.split('');
  const anagramArr = [];
  let comboArray;
  for (let i = 0; i < strArr.length; i += 1) {
    comboArray = [strArr[i]];
    for (let j = 0; j < strArr.length; j += 1) {
      if (i !== j) {
        comboArray.push(strArr[j]);
      }
    }
    if (!anagramArr.includes(comboArray.join(''))) {
      anagramArr.push(comboArray.join(''));
    }
    comboArray = [strArr[i]];
    for (let k = (strArr.length - 1); k >= 0; k -= 1) {
      if (i !== k) {
        comboArray.push(strArr[k]);
      }
    }
    if (!anagramArr.includes(comboArray.join(''))) {
      anagramArr.push(comboArray.join(''));
    }
  }
  return anagramArr;
}

module.exports = anagrams;

console.log(anagrams('dodo'))