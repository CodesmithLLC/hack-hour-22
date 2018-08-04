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
  const output = [];
  const strArr = string.split('');
  const factorial = factorial(strArr.length);

  for(let i = 0; i < factorial; i++) {

    for(let j = 0; j < strArr.length; j++) {

    }
  }
}


function factorial (n, f = []) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1, f) * n;
}


module.exports = anagrams;
