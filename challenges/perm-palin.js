/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function palindrome(string) {
  // if (string.length < 2) return true;
  let result = string.replace(/[\W\s]/g, "").toLowerCase();
  if (result.length === 0) {
    return true;
  }
  if (result[0] !== result[result.length - 1]) {
    return false;
  }
  return palindrome(result.slice(1, -1));
}

function permPalin1(str) {
  let unmatched = new Set();
  str.split('').forEach( char => {
    if (unmatched.has(char))
      unmatched.delete(char);
    else
      unmatched.add(char);
  });
  return unmatched.size <= 1;
}

console.log(permPalin('cbabag'))

function permPalin(str) {
  if (str.length < 2) return true;
  let newString = str.replace(/[\W\s]/g, "").toLowerCase();
  const output = {};
  let numOdd = 0;

  for (let i = 0; i < newString.length; i += 1) {
    output[newString[i]] = ++output[newString[i]] || 1;
    console.log(output)
  }
  for (const key in output) { 
    if (output[key] % 2 === 1) numOdd++;
    if (numOdd > 1) return false;
  }
  return true;
}

function newPermPalin(str) {
  const map = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
     map.push(str[1]);

  }
}

console.log(permPalin('abAbe'));
// console.log(permPalin('cbaba'));
// console.log(permPalin('cbac'));
// console.log(permPalin('ebacbace'))

module.exports = permPalin;