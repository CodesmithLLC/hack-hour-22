/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  if (!input) { return true };
  const newArray = input.split('');
  const openBracket = ['[', '{', '(']
  const closeBracket = [']', '}', ')']
  let matchingBracket;
  const stack = [];
  let char;
  for (let i = 0; i < newArray.length; i += 1) {
    char = newArray[i];
    if (closeBracket.indexOf(char) > -1) {
      matchingBracket = openBracket[closeBracket.indexOf(char)];
      if (stack.length === 0 || (stack.pop() !== matchingBracket)) {
        return false
      }
    }
    else {
      stack.push(char)
    }
  }
  return stack.length === 0;
}


function balancedParens(input) {
  var matches = { '[': ']', '{': '}', '(': ')' };
  var brackets = [];
  for (var i = 0; i < input.length; i++) {
    let char = input[i];
    if (char in matches) { // in operator
      brackets.push(char);
    } else if (char === ']' || char === ')' || char === '}') {
      if (matches[brackets.pop()] !== char) {
        return false;
      }
    }
  }
  return !brackets.length;
}
// #endregion

////////////
///tests///
///////////

console.log('SHOULD BE TRUE');
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true

console.log('SHOULD BE FALSE');
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;

module.exports = balancedParens;
