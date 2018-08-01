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
  const newArr = [];
  if (string.length < 2) {
    newArr.push(string);
    return newArr;
  }
  for (let i = 0; i < string.length; i += 1) {
    let firstChar = string[i];
    let charsLeft = string.substring(0, i) + string.substring(i + 1);
    let innerChars = anagrams(charsLeft);
    console.log(innerChars)
    for (let ii = 0; ii < innerChars.length; ii++) {
      newArr.push(firstChar + innerChars[ii]);
    }
  }
  return newArr;
}

console.log(anagrams('abc'));


function recursiveAnagrams(firstChar, string) {
  if (string.length === 1) return [firstChar + string];

  let returnResult = [];
  for (let i = 0; i < string.length; i += 1) {
    let output = recursiveAnagrams(string[i], string.substring(0, i) + string.substring(i + 1));
    for (let j = 0; j < output.length; j++) {
      returnResult.push(firstChar + output[j]);
    }
  }
  return returnResult;
}

console.log(recursiveAnagrams('', 'adam'));

module.exports = anagrams;
